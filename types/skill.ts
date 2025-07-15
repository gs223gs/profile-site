export type StarLevel = 1 | 2 | 3 | 4 | 5;

export interface Skill {
  id: string;                        // map() 用の key
  name: string;                      // 表示名
  iconUrl: string;                   // skillicons など
  level: StarLevel;                  // ★
  startedAt: `${number}/${number}`;  // 'YYYY/MM' 形式
  totalHours?: number;               // 累計学習時間 (h)
  overview: string;                  // 1〜2 行の概要
  highlights: readonly string[];     // 箇条書き
}

/** now‑training ページ用データ  */
export const skills: readonly Skill[] = [
  /* ---------------- フロントエンド ---------------- */
  {
    id: 'react',
    name: 'React (TypeScript)',
    iconUrl: 'https://skillicons.dev/icons?i=react',
    level: 3,                         // ⭐⭐⭐
    startedAt: '2024/07',
    totalHours: 300,
    overview: 'モダンフロント転向のきっかけとなったライブラリ。',
    highlights: [
      'Jotai・React Hook Form・TanStack Query を活用',
      'Todo / Blog SPA を単独実装（Jest UT30 本）',
    ],
  },
  {
    id: 'nextjs',
    name: 'Next.js (TypeScript)',
    iconUrl: 'https://skillicons.dev/icons?i=nextjs',
    level: 1,                         // ⭐
    startedAt: '2025/06',
    overview: 'React ルーティング効率化を目的に学習中。ポートフォリオで採用。',
    highlights: [
      'App Router・SSG/ISR の基礎を習得',
      'Tailwind＋shadcn/ui で UI 実装',
    ],
  },

  /* ---------------- バックエンド ---------------- */
  {
    id: 'java',
    name: 'Java / Spring Boot',
    iconUrl: 'https://skillicons.dev/icons?i=java',
    level: 3,                         // ⭐⭐⭐
    startedAt: '2023/04',
    overview: '専門学校時代から継続学習。REST API CRUD を実装可。',
    highlights: [
      'Spring Boot で三層アーキテクチャを実装',
      'JUnit＋MockMvc で単体テスト',
    ],
  },
  {
    id: 'supabase',
    name: 'Supabase',
    iconUrl: 'https://skillicons.dev/icons?i=supabase',
    level: 2,                         // ⭐⭐
    startedAt: '2025/03',
    overview: '個人開発の BaaS として採用。Auth・DB を統合利用。',
    highlights: [
      'Row‑Level Security 設定を理解',
      'ダッシュボード ER 図自動生成がお気に入り',
    ],
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    iconUrl: 'https://skillicons.dev/icons?i=postgresql',
    level: 3,                         // ⭐⭐⭐
    startedAt: '2023/04',
    overview: 'DB 設計と第 3 正規化を習得。',
    highlights: [
      'EXPLAIN を用いたクエリ最適化の基礎',
      'ER 図作成・DDL 生成を経験',
    ],
  },

  /* ---------------- DevOps / ツール ---------------- */
  {
    id: 'docker',
    name: 'Docker',
    iconUrl: 'https://skillicons.dev/icons?i=docker',
    level: 2,                         // ⭐⭐
    startedAt: '2025/07',
    overview: '"環境を汚さない" ために導入。開発環境統一を実現。',
    highlights: [
      'docker‑compose で Next.js＋Postgres を統合',
      '開発／本番の差異を解消',
    ],
  },
  {
    id: 'git',
    name: 'Git',
    iconUrl: 'https://skillicons.dev/icons?i=git',
    level: 3,                         // ⭐⭐⭐
    startedAt: '2024/07',
    overview: 'GitHub Flow を軸にバージョン管理。',
    highlights: [
      'Conventional Commits・PR Template を運用',
      'rebase／squash を用いた履歴整理',
    ],
  },
  {
    id: 'github',
    name: 'GitHub',
    iconUrl: 'https://skillicons.dev/icons?i=github',
    level: 3,                         // ⭐⭐⭐
    startedAt: '2024/07',
    overview: '学生 PJ 含む極小規模チーム開発で使用。',
    highlights: [
      'Issue → Branch → PR のフローを実践',
      '公開リポジトリ gs223gs で学習履歴を管理',
    ],
  },
  {
    id: 'githubactions',
    name: 'GitHub Actions',
    iconUrl: 'https://skillicons.dev/icons?i=githubactions',
    level: 1,                         // ⭐
    startedAt: '2025/04',
    overview: 'Lint／Test／Build の CI パイプラインを構築中。',
    highlights: [
      'OpenAI Review を自動実行',
      'matrix build・cache 基礎を理解',
    ],
  },

  /* ---------------- コラボレーションツール ---------------- */
  {
    id: 'notion',
    name: 'Notion',
    iconUrl: 'https://skillicons.dev/icons?i=notion',
    level: 3,                         // ⭐⭐⭐
    startedAt: '2024/07',
    overview: 'Wiki・ドキュメント・タスク管理を一元化。',
    highlights: [
      'データベース機能でカンバンボード運用',
      'テンプレートで議事録・仕様書を標準化',
    ],
  },
  {
    id: 'figma',
    name: 'Figma',
    iconUrl: 'https://skillicons.dev/icons?i=figma',
    level: 2,                         // ⭐⭐
    startedAt: '2024/07',
    overview: 'ワイヤーフレーム・プロトタイプ作成で使用。',
    highlights: [
      'ER 図・スライド作成にも流用',
      '今後は UI コンポーネント管理を予定',
    ],
  },
] as const;