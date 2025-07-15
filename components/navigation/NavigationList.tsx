'use client'

import { usePathname } from 'next/navigation'
import { useAtom } from 'jotai'
import { routes } from '@/types/navigation'
import NavigationItem from './NavigationItem'
import { sidebarOpenAtom } from '@/atoms/sidebarAtoms'

const NavigationList = () => {
  const pathname = usePathname()
  const [isOpen] = useAtom(sidebarOpenAtom)

  return (
    <div className={`flex-1 ${isOpen ? 'p-4' : 'p-2'} space-y-0`}>
      {routes.map((route) => (
        <NavigationItem
          key={route.href}
          route={route}
          isActive={pathname === route.href}
          isCollapsed={!isOpen}
        />
      ))}
    </div>
  )
}

export default NavigationList