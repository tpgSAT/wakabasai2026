import csv from "csvtojson"
import fs from "fs"
import axios from "axios"
import path from "path"

const CSV_CANDIDATES = ["data/wakabasai_exhibitor.csv", "data/exhibitors.csv"]
const CSV = CSV_CANDIDATES.find((file) => fs.existsSync(file)) ?? CSV_CANDIDATES[0]
const ASSETS = "src/assets/exhibitors"
const OUTPUT = "src/lib/exhibitors.ts"

function parseDays(v: string): string[] {
  if (!v) return []
  return v
    .split(/[,.、]/)
    .map(s => s.trim().replace(/^"+|"+$/g, ""))
    .filter(Boolean)
}

function parseCircleBoothDays(circleBoothDate: string): string[] | null {
  const parsed = parseDays(circleBoothDate)
  if (parsed.length > 0) return parsed
  return null
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

const KNOWN_IMAGE_EXTENSIONS = Array.from(new Set([...Object.values(MIME_TO_EXT), "jpg"]))

function findExistingImage(filePath: string): string | null {
  const parsed = path.parse(filePath)
  for (const ext of KNOWN_IMAGE_EXTENSIONS) {
    const candidate = path.join(parsed.dir, `${parsed.name}.${ext}`)
    if (fs.existsSync(candidate)) return candidate
  }
  return null
}

async function download(url: string, filePath: string): Promise<string> {
  const existing = findExistingImage(filePath)
  if (existing) return path.basename(existing)

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
  websiteLink: ${r.website_link ? `"${r.website_link}"` : null},
  circleBoothTitle: ${r.circle_booth_title ? JSON.stringify(r.circle_booth_title.trim()) : null},
  circleBoothLocation: ${r.circle_booth_location ? JSON.stringify(r.circle_booth_location.trim()) : null},
  circleBoothDate: ${JSON.stringify(parseCircleBoothDays(r.circle_booth_date))}
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
    circleBoothTitle: string | null;
    circleBoothLocation: string | null;
    circleBoothDate: EventDay[] | null;
}


export const exhibitors: exhibitor[] = [
${items.join(",")}
]
`

  fs.writeFileSync(OUTPUT, ts)
  console.log(`\n✨ ${OUTPUT} を生成しました（${total} 件）`)
}

run()
