import { type Career } from '@/types/career'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { TagBadge } from './TagBadge'

interface CareerCardProps {
  career: Career
}

export function CareerCard({ career }: CareerCardProps) {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="text-sm text-muted-foreground mb-2">
              {career.date}
            </div>
            <CardTitle className="text-lg leading-tight mb-3">
              {career.title}
            </CardTitle>
            {career.detail && (
              <p className="text-sm text-muted-foreground mb-4">
                {career.detail}
              </p>
            )}
            <div className="flex flex-wrap gap-2">
              {career.tags.map(tag => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}