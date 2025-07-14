import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Route } from '@/types/navigation'

interface NavigationItemProps {
  route: Route
  isActive: boolean
}

const NavigationItem = ({ route, isActive }: NavigationItemProps) => {
  return (
    <Link
      href={route.href}
      className={cn(
        'block px-4 py-3 text-sm font-medium rounded-lg transition-colors',
        isActive
          ? 'bg-gray-900 text-white'
          : 'text-gray-700 hover:bg-gray-100'
      )}
    >
      {route.label}
    </Link>
  )
}

export default NavigationItem