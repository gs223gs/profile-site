import { atom } from 'jotai'
import { type Tag, type Career, careers } from '@/types/career'

export const selectedTagsAtom = atom<Tag[]>([])

export const filteredCareersAtom = atom((get) => {
  const selectedTags = get(selectedTagsAtom)
  
  if (selectedTags.length === 0) return careers
  
  return careers.filter((career: Career) => {
    return selectedTags.some(tag => career.tags.includes(tag))
  })
})