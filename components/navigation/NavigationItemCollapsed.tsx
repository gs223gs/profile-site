import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Route } from '@/types/navigation'

interface NavigationItemCollapsedProps {
  route: Route
  isActive: boolean
}

const NavigationItemCollapsed = ({ route, isActive }: NavigationItemCollapsedProps) => {
  const Icon = route.icon

  return (
    <Link
      href={route.href}
      className={cn(
        'flex items-center justify-center text-sm font-medium rounded-lg p-3 aspect-square',
        isActive
          ? 'bg-gray-900 text-white'
          : 'text-gray-700 hover:bg-gray-100'
      )}
      title={route.label}
    >
      {Icon && <Icon className="h-5 w-5" />}
    </Link>
  )
}

export default NavigationItemCollapsed