# T.Miura プロフィールサイト

志は身長より高く - T.Miuraのポートフォリオ・プロフィールサイト

## 概要

このプロジェクトは、T.Miuraの経歴、スキル、ポートフォリオを紹介するプロフィールサイトです。モダンな技術スタックを使用し、レスポンシブでインタラクティブなユーザー体験を提供します。

## 技術スタック

- **フレームワーク**: Next.js (v15.3.5)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **UIコンポーネント**: shadcn/ui
- **グラフ**: Recharts, ECharts
- **API**: GraphQL (graphql-request)
- **アイコン**: Lucide React
- **テスト**: Vitest
- **状態管理**: Jotai
- **フォーム**: React Hook Form + Zod

## 機能 

### 主要ページ

- **ホーム** (`/`): プロフィール写真のスライドショー、キャッチコピー、自己紹介、技術スタック、GitHubコントリビューション
- **キャリア** (`/career`): 職歴・学歴の詳細表示
- **スキル** (`/nowtraining`): 現在学習中の技術スタックとスキルセット
- **リポジトリ** (`/repository`): GitHubリポジトリの一覧表示
- **お問い合わせ** (`/contact`): コンタクトフォーム

## セットアップ

### 必要な環境

- Docker
- Docker Compose

### Dockerを使用した開発環境の構築

```bash
# リポジトリのクローン
git clone [repository-url]
cd profile-site

# Dockerコンテナの起動
docker compose up -d

# コンテナに入る
docker compose exec node sh

# コンテナ内で開発サーバーを起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### ローカル環境での開発（Dockerを使用しない場合）

#### 必要な環境

- Node.js (v20以上推奨)
- npm または yarn

#### インストール

```bash
# 依存関係のインストール
npm install
```

### 環境変数の設定

プロジェクトルートに `.env.local` ファイルを作成し、以下の環境変数を設定してください：

```env
GITHUB_TOKEN=your_github_personal_access_token
SLACKBOT_TOKEN=your_slack_bot_token
```

## 開発コマンド

```bash
# 開発サーバーの起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバーの起動
npm start

# Lintの実行
npm run lint

# テストの実行
npm run test
```

## プロジェクト構造

```
profile-site/
├── app/                    # Next.js App Router
│   ├── actions/           # Server Actions
│   ├── career/            # キャリアページ
│   ├── contact/           # お問い合わせページ
│   ├── nowtraining/       # スキルページ
│   └── repository/        # リポジトリページ
├── components/            # Reactコンポーネント
│   ├── career/           # キャリア関連コンポーネント
│   ├── contact/          # コンタクトフォーム
│   ├── hero/             # ホームページコンポーネント
│   ├── layout/           # レイアウトコンポーネント
│   ├── navigation/       # ナビゲーション
│   ├── nowtraining/      # スキル関連コンポーネント
│   ├── repository/       # リポジトリ関連コンポーネント
│   └── ui/               # 共通UIコンポーネント
├── atoms/                 # Jotai atoms（状態管理）
├── lib/                   # ユーティリティ関数
├── types/                 # TypeScript型定義
├── queries/               # GraphQLクエリ
└── public/               # 静的ファイル
```

## shadcn/ui コンポーネントの追加

新しいUIコンポーネントを追加する場合：

```bash
npx shadcn@latest add [component-name]
```

## デプロイ

このプロジェクトは~~Cloudflare~~Vercelへのデプロイを想定しています。

## ライセンス

Private Project
