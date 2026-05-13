'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Tile {
  id: string
  title: string
  image: string
  price: number
  description: string
}

export default function FeaturedTiles() {
  const [tiles, setTiles] = useState<Tile[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Mock featured tiles - replace with API call later
    const mockTiles: Tile[] = [
      {
        id: 'tile_001',
        title: 'Ceramic Blue Tile',
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=400&fit=crop',
        price: 45.99,
        description: 'Premium ceramic tile with blue glaze finish',
      },
      {
        id: 'tile_002',
        title: 'Modern Geometric Pattern',
        image: 'https://images.unsplash.com/photo-1576673699887-3bdda6dcc246?w=400&h=400&fit=crop',
        price: 55.99,
        description: 'Contemporary geometric design for modern spaces',
      },
      {
        id: 'tile_003',
        title: 'Marble Elegance',
        image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=400&fit=crop',
        price: 65.99,
        description: 'Luxurious marble-effect tile',
      },
      {
        id: 'tile_004',
        title: 'Minimalist Monochrome',
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=400&fit=crop',
        price: 35.99,
        description: 'Simple yet elegant monochrome design',
      },
    ]

    setTiles(mockTiles)
    setIsLoading(false)
  }, [])

  if (error) {
    return (
      <div className="alert alert-error">
        <span>{error}</span>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {tiles.map((tile) => (
        <div
          key={tile.id}
          className="card bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
        >
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
              <span className="text-2xl font-bold text-indigo-600">${tile.price}</span>
              <Link href={`/tile/${tile.id}`} className="btn btn-primary btn-sm">
                Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
