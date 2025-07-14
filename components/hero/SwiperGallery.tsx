
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { ImageData } from '@/types/image'

interface SwiperGalleryProps {
  images: ImageData[]
}

export const SwiperGallery = ({ images }: SwiperGalleryProps) => {
  console.log('SwiperGallery images:', images) // デバッグ用

  return (
    <div className="w-full h-full">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full h-full"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="relative w-full h-full min-h-[200px]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={image.id === 1}
                onError={(e) => {
                  console.error('画像読み込みエラー:', image.src, e)
                }}
                onLoad={() => {
                  console.log('画像読み込み成功:', image.src)
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
