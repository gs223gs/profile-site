'use client'

import { usePathname } from 'next/navigation'
import { routes } from '@/types/navigation'
import NavigationItem from './NavigationItem'

const NavigationList = () => {
  const pathname = usePathname()

  return (
    <div className="flex-1 p-4 space-y-2">
      {routes.map((route) => (
        <NavigationItem
          key={route.href}
          route={route}
          isActive={pathname === route.href}
        />
      ))}
    </div>
  )
}

export default NavigationList