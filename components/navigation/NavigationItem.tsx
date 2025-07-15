import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Route } from '@/types/navigation'

interface NavigationItemProps {
  route: Route
  isActive: boolean
  isCollapsed?: boolean
}

const NavigationItem = ({ route, isActive, isCollapsed = false }: NavigationItemProps) => {
  const Icon = route.icon

  return (
    <Link
      href={route.href}
      className={cn(
        'flex items-center text-sm font-medium rounded-lg transition-colors',
        isCollapsed ? 'justify-center p-3' : 'px-4 py-3',
        isActive
          ? 'bg-gray-900 text-white'
          : 'text-gray-700 hover:bg-gray-100'
      )}
      title={isCollapsed ? route.label : undefined}
    >
      {Icon && <Icon className={cn("h-5 w-5", !isCollapsed && "mr-3")} />}
      {!isCollapsed && route.label}
    </Link>
  )
}

export default NavigationItem