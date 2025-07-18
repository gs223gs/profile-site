export interface ImageData {
  id: number
  src: string
  alt: string
  width?: number
  height?: number
}

export const profileImages: ImageData[] = [
  {
    id: 1,
    src: '/T-Miura1.jpg',
    alt: 'T.Miura プロフィール写真 1',
    width: 400,
    height: 400
  },
  {
    id: 2,
    src: '/T-Miura2.jpg',
    alt: 'T.Miura プロフィール写真 2',
    width: 400,
    height: 400
  },
  {
    id: 3,
    src: '/T-Miura3.jpg',
    alt: 'T.Miura プロフィール写真 3',
    width: 400,
    height: 400
  },
  {
    id: 4,
    src: '/T-Miura4.PNG',
    alt: 'T.Miura プロフィール写真 4',
    width: 400,
    height: 400
  }
]