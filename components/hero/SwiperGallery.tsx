
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // グローバル import
import { Autoplay } from 'swiper/modules';

export const SwiperGallery = ({ images }: { images: string[] }) => (
  <Swiper
    modules={[Autoplay]}
    autoplay={{ delay: 3000 }}
    loop
    className="w-full h-64"
  >
    {images.map(src => (
      <SwiperSlide key={src}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" className="object-cover w-full h-full" />
      </SwiperSlide>
    ))}
  </Swiper>
);
