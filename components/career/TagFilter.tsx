'use client'

import { useAtom } from 'jotai'
import { type Tag } from '@/types/career'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { selectedTagsAtom } from '@/lib/stores/career'

const tagConfig = {
  work: {
    label: '就業',
    className: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    selectedClassName: 'bg-blue-500 text-white',
  },
  side: {
    label: '個人開発',
    className: 'bg-green-100 text-green-800 hover:bg-green-200',
    selectedClassName: 'bg-green-500 text-white',
  },
  cert: {
    label: '資格',
    className: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
    selectedClassName: 'bg-yellow-500 text-white',
  },
  edu: {
    label: '教育',
    className: 'bg-purple-100 text-purple-800 hover:bg-purple-200',
    selectedClassName: 'bg-purple-500 text-white',
  },
  misc: {
    label: 'その他',
    className: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    selectedClassName: 'bg-gray-500 text-white',
  },
} as const

export function TagFilter() {
  const [selectedTags, setSelectedTags] = useAtom(selectedTagsAtom)

  const toggleTag = (tag: Tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {Object.entries(tagConfig).map(([tag, config]) => {
        const isSelected = selectedTags.includes(tag as Tag)
        return (
          <Badge
            key={tag}
            variant="secondary"
            className={cn(
              'cursor-pointer transition-colors',
              isSelected ? config.selectedClassName : config.className
            )}
            onClick={() => toggleTag(tag as Tag)}
          >
            {config.label}
          </Badge>
        )
      })}
    </div>
  )
}