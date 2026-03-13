import csv from "csvtojson"
import fs from "fs"
import axios from "axios"
import path from "path"

const CSV = "data/exhibitors_0313.csv"
const ASSETS = "src/assets/exhibitors"
const OUTPUT = "src/lib/exhibitors.ts"

function parseDays(v: string): string[] {
  if (!v) return []
  return v.split(",").map(s => s.trim())
}

function driveToDirect(url?: string) {
  if (!url) return null
  const m = url.match(/\/d\/(.*?)\//) || url.match(/[?&]id=([^&]+)/)
  if (!m) return null
  return `https://drive.google.com/uc?export=download&id=${m[1]}`
}

const MIME_TO_EXT: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/avif": "avif",
  "image/heic": "heic",
  "image/heif": "heif",
}

async function download(url: string, filePath: string): Promise<string> {
  const res = await axios.get(url, { responseType: "arraybuffer" })
  const mime = (res.headers["content-type"] as string | undefined)?.split(";")[0].trim() ?? ""
  const ext = MIME_TO_EXT[mime] ?? (path.extname(filePath).slice(1) || "jpg")
  const finalPath = filePath.replace(/\.[^.]+$/, `.${ext}`)
  fs.writeFileSync(finalPath, res.data)
  return path.basename(finalPath)
}

async function run() {

  const rows = await csv().fromFile(CSV)
  const total = rows.length
  console.log(`📋 ${total} 件の出展者を処理します`)

  if (!fs.existsSync(ASSETS)) fs.mkdirSync(ASSETS, { recursive: true })

  const imports: string[] = []
  const items: string[] = []

  for (const [idx, r] of rows.entries()) {
    const prefix = `[${idx + 1}/${total}] ${r.exhibitor_name}`
    process.stdout.write(`${prefix} ...`)

    const base = `exhibitor${idx}`

    let logoVar = null
    let photoVar = null

    if (r.exhibitor_logo) {
      const url = driveToDirect(r.exhibitor_logo)
      if (url) {
        const file = await download(url, path.join(ASSETS, `${base}_logo.jpg`))
        logoVar = `${base}Logo`
        imports.push(`import ${logoVar} from '@assets/exhibitors/${file}';`)
      }
    }

    if (r.exhibitor_photo) {
      const url = driveToDirect(r.exhibitor_photo)
      if (url) {
        const file = await download(url, path.join(ASSETS, `${base}_photo.jpg`))
        photoVar = `${base}Photo`
        imports.push(`import ${photoVar} from '@assets/exhibitors/${file}';`)
      }
    }

    if (!logoVar) throw new Error(`\nロゴがありません: ${r.exhibitor_name}`)

    const photoStatus = photoVar ? "📸" : "  "
    process.stdout.write(` ✅ ロゴ ${photoStatus}\n`)

    items.push(`
{
  exhibitorName: "${r.exhibitor_name}",
  exhibitorDescription: ${JSON.stringify(r.exhibitor_description)},
  exhibitorIcon: ${logoVar},
  exhibitorPhoto: ${photoVar || null},
  booths: [${r.booth ? r.booth.split(",").map((b: string) => `"${b.trim()}"`).join(", ") : ""}],
  days: ${JSON.stringify(parseDays(r.event_days))},
  xLink: ${r.x_link ? `"${r.x_link}"` : null},
  instagramLink: ${r.instagram_link ? `"${r.instagram_link}"` : null},
  youtubeLink: ${r.youtube_link ? `"${r.youtube_link}"` : null},
  websiteLink: ${r.website_link ? `"${r.website_link}"` : null}
}
`)
  }

  const ts = `
${imports.join("\n")}

type BoothType = "サークルブース" | "ワークショップ" | "ステージ企画";

type EventDay = "4/10" | "4/11";

export type exhibitor = {
    exhibitorName: string;
    exhibitorDescription: string;
    exhibitorIcon: ImageMetadata;
    exhibitorPhoto: ImageMetadata | null;
    booths: BoothType[];
    days: EventDay[];
    xLink: string | null;
    instagramLink: string | null;
    youtubeLink: string | null;
    websiteLink: string | null;
}


export const exhibitors: exhibitor[] = [
${items.join(",")}
]
`

  fs.writeFileSync(OUTPUT, ts)
  console.log(`\n✨ ${OUTPUT} を生成しました（${total} 件）`)
}

run()