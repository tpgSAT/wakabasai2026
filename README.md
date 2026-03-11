# 若葉祭2026 公式サイト

[Astro](https://astro.build) で構築された若葉祭2026の静的イベントサイトです。

## 🚀 プロジェクト構成

```text
/
├── public/             # そのまま配信されるファイル（favicon、OG画像など）
├── data/               # CSVなどの元データ
├── scripts/            # データ生成スクリプト
└── src/
    ├── assets/         # 画像・フォントなどの静的アセット
    ├── components/     # 再利用可能な Astro コンポーネント
    ├── layouts/        # ページレイアウト
    ├── lib/            # ユーティリティ関数・データ定義
    └── pages/          # ファイルベースルーティング
```

## 🧞 コマンド一覧

プロジェクトルートでターミナルから実行してください：

| コマンド                           | 内容                                                 |
| :--------------------------------- | :--------------------------------------------------- |
| `npm install`                      | 依存パッケージをインストール                         |
| `npm run dev`                      | `localhost:4321` でローカル開発サーバーを起動        |
| `npm run build`                    | 本番用サイトを `./dist/` にビルド                    |
| `npm run preview`                  | デプロイ前にビルド結果をローカルでプレビュー         |
| `npm run generate:exhibitors`      | 出展者データ（CSV）から `src/lib/exhibitors.ts` を生成 |

## 📋 出展者データの生成

出展者データはCSVから自動生成されます。`data/` ディレクトリにCSVを配置してから実行してください：

```sh
npm run generate:exhibitors
```

Google Drive の画像URLを解決してダウンロードし、`src/assets/exhibitors/` に保存したうえで `src/lib/exhibitors.ts` を生成します。
