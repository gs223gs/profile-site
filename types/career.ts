// types/career.ts
/** キャリア項目で使用するタグ種別 */
export type Tag = 'work' | 'side' | 'cert' | 'edu' | 'misc'

/** キャリア項目の型 */
export interface Career {
  /** YYYY-MM 形式、または "YYYY-MM – YYYY-MM" の範囲表記 */
  readonly date: string
  /** 見出しタイトル */
  readonly title: string
  /** 補足詳細（省略可） */
  readonly detail?: string
  /** 1 件につき 1 〜 n 個のタグ */
  readonly tags: readonly Tag[]
}

/** キャリア一覧 */
export const careers: readonly Career[] = [
  {
    date: '2025-06 – Now',
    title: 'Next.js App Router 学習',
    detail: 'プロフィールサイト作成',
    tags: ['side'],
  },
  {
    date: '2025-04 – Now',
    title: 'Java 常駐 (SES)',
    detail: '保険システム保守・レガシーFWのspringリプレイス',
    tags: ['work'],
  },
  {
    date: '2024-04',
    title: '基本情報技術者 合格',
    tags: ['cert'],
  },
  {
    date: '2024-03',
    title: 'IT パスポート 合格',
    tags: ['cert'],
  },
  {
    date: '2024-03 – Now',
    title: 'React 学習',
    detail: 'React の思想やフロントエンドの学習を進めています',
    tags: ['side'],
  },
  {
    date: '2023-04 – 2025-03',
    title: '職業訓練校 IT系専門学校',
    detail: 'Java / DB / Web基礎 / 統計 / 機械学習 ・ EC 卒業制作',
    tags: ['edu'],
  },
  {
    date: '2023-03',
    title: 'ダーツプロ 資格取得',
    detail: '12週・週30h トレーニング',
    tags: ['misc'],
  },
  {
    date: '2022-08 – 2022-11',
    title: 'トヨタ自動車工場 (派遣)',
    detail: '部品搬送 (フォークリフト)',
    tags: ['work'],
  },
  {
    date: '2018-04 – 2022-07',
    title: '建築資材卸 倉庫',
    detail: 'ピッキング／配送補助',
    tags: ['work', 'cert'], // フォークリフト免許を含む
  },
  {
    date: '2018-03',
    title: '高校卒 ＋ 普通免許取得',
    tags: ['edu', 'cert'],
  },
] as const