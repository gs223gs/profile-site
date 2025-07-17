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
    name: 'React',
    iconUrl: 'https://skillicons.dev/icons?i=react',
    level: 3,                         // ⭐⭐⭐
    startedAt: '2024/07',
    overview: 'モダンフロント転向のきっかけとなったライブラリ。',
    highlights: [
      'Jotai・React Hook Form・TanStack Query を活用',
      'スキル感はsupabaseを使用したOauth, CRUD,等を問題なく実装できます。',
    ],
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    iconUrl: 'https://skillicons.dev/icons?i=nextjs',
    level: 1,                         // ⭐
    startedAt: '2025/06',
    overview: 'React ルーティング効率化を目的に学習中。ポートフォリオで採用。',
    highlights: [
      'App Router・SSG/ISR の思想を学習中です。',

    ],
  },

  /* ---------------- バックエンド ---------------- */
  {
    id: 'java',
    name: 'Java',
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
      'ダッシュボード ER 図自動生成がお気に入りです',
    ],
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    iconUrl: 'https://skillicons.dev/icons?i=postgresql',
    level: 3,                         // ⭐⭐⭐
    startedAt: '2023/04',
    overview: 'DB設計と正規化を行えます',
    highlights: [
      '現在はより良いパフォーマンスを出すためのクエリ設計を学習中です',

    ],
  },

  /* ---------------- DevOps / ツール ---------------- */
  {
    id: 'docker',
    name: 'Docker',
    iconUrl: 'https://skillicons.dev/icons?i=docker',
    level: 2,                         // ⭐⭐
    startedAt: '2025/07',
    overview: '環境差異、衝突を減らすために導入',
    highlights: [
      'docker‑compose で Next.js＋Postgres を統合',
      'チーム開発時にも開発環境をすぐに整えれるため重宝しています',
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
      'チーム開発の必需品であり，手足のように扱えます',

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
      'プロダクト，ポートフォリオだけでなく学習でも積極的に使用しています',
    ],
  },
  {
    id: 'githubactions',
    name: 'GitHub Actions',
    iconUrl: 'https://skillicons.dev/icons?i=githubactions',
    level: 1,                         // ⭐
    startedAt: '2025/04',
    overview: 'Lint/Test/Build の CI パイプラインを構築中。',
    highlights: [
      '現代開発の必需品であるCIをプロジェクトに組み込むために使用しています。特にLintは非推奨な書き方を「覚える」のではなく自動で抑制することで貢献してくれています',
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