'use client'

import { useAtom } from 'jotai'
import { sidebarOpenAtom } from '@/atoms/sidebarAtoms'
import { SidebarExpanded } from './SidebarExpanded'
import { SidebarCollapsed } from './SidebarCollapsed'

const Sidebar = () => {
  const [isOpen] = useAtom(sidebarOpenAtom)

  return isOpen ? <SidebarExpanded /> : <SidebarCollapsed />
}

export default Sidebar