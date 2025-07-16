'use client'

import { useAtomValue } from 'jotai'
import { TagFilter } from './TagFilter'
import { CareerCard } from './CareerCard'
import { filteredCareersAtom } from '@/lib/stores/career'
import { type Career } from '@/types/career'

export function CareerList() {
  const filteredCareers = useAtomValue(filteredCareersAtom)

  return (
    <div className="space-y-8">
      <TagFilter />
      
      <div className="space-y-4">
        {filteredCareers.map((career: Career, index: number) => (
          <CareerCard
            key={`${career.date}-${index}`}
            career={career}
          />
        ))}
      </div>
    </div>
  )
}