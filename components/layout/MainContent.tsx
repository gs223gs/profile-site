'use client'

import { useAtom } from 'jotai'
import { sidebarOpenAtom } from '@/atoms/sidebarAtoms'

interface MainContentProps {
  children: React.ReactNode
}

export function MainContent({ children }: MainContentProps) {
  const [isOpen] = useAtom(sidebarOpenAtom)

  return (
    <main className={isOpen ? 'ml-64' : 'ml-16'}>
      {children}
    </main>
  )
}