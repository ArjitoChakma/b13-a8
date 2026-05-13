'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Tile {
  id: string
  title: string
  image: string
  price: number
  description: string
}

interface TileCarouselProps {
  tiles: Tile[]
  title?: string
}

export default function TileCarousel({ tiles, title }: TileCarouselProps) {
  if (!tiles || tiles.length === 0) {
    return <div className="text-center py-8">No tiles available</div>
  }

  return (
    <div className="w-full">
      {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className="w-full"
      >
        {tiles.map((tile) => (
          <SwiperSlide key={tile.id}>
            <div className="card bg-white shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
              <figure className="h-48 bg-gray-200 relative overflow-hidden">
                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-lg">{tile.title}</h3>
                <p className="text-sm text-gray-600">{tile.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-indigo-600">
                    ${tile.price}
                  </span>
                  <Link href={`/tile/${tile.id}`} className="btn btn-primary btn-sm">
                    View
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
