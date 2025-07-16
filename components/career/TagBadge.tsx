import { type Tag } from '@/types/career'
import { Badge } from '@/components/ui/badge'

interface TagBadgeProps {
  tag: Tag
}

const tagConfig = {
  work: {
    label: '就業',
    className: 'bg-blue-100 text-blue-800',
  },
  side: {
    label: '個人開発',
    className: 'bg-green-100 text-green-800',
  },
  cert: {
    label: '資格',
    className: 'bg-yellow-100 text-yellow-800',
  },
  edu: {
    label: '教育',
    className: 'bg-purple-100 text-purple-800',
  },
  misc: {
    label: 'その他',
    className: 'bg-gray-100 text-gray-800',
  },
} as const

export function TagBadge({ tag }: TagBadgeProps) {
  const config = tagConfig[tag]
  
  return (
    <Badge
      variant="secondary"
      className={config.className}
    >
      {config.label}
    </Badge>
  )
}