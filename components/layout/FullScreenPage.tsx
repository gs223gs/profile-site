import { ReactNode } from 'react'

interface FullScreenPageProps {
  children: ReactNode
  className?: string
}

/**
 * フルスクリーン表示が必要なページ用のコンポーネント
 * PC: スクロール禁止、画面いっぱい
 * モバイル: 通常のスクロール可能
 */
export function FullScreenPage({ children, className = '' }: FullScreenPageProps) {
  return (
    <div className={`
      min-h-screen 
      lg:h-screen lg:overflow-hidden
      ${className}
    `}>
      {children}
    </div>
  )
}