'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Loading from '@/components/Loading'

interface Tile {
  id: string
  title: string
  image: string
  price: number
  category: string
  description: string
}

export default function AllTilesPage() {
  const [tiles, setTiles] = useState<Tile[]>([])
  const [filteredTiles, setFilteredTiles] = useState<Tile[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Mock tiles data
    const mockTiles: Tile[] = [
      {
        id: 'tile_001',
        title: 'Ceramic Blue Tile',
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=400&fit=crop',
        price: 45.99,
        category: 'ceramic',
        description: 'Premium ceramic tile with blue glaze finish',
      },
      {
        id: 'tile_002',
        title: 'Modern Geometric Pattern',
        image: 'https://images.unsplash.com/photo-1576673699887-3bdda6dcc246?w=400&h=400&fit=crop',
        price: 55.99,
        category: 'modern',
        description: 'Contemporary geometric design',
      },
      {
        id: 'tile_003',
        title: 'Marble Elegance',
        image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=400&fit=crop',
        price: 65.99,
        category: 'marble',
        description: 'Luxurious marble-effect',
      },
      {
        id: 'tile_004',
        title: 'Minimalist Monochrome',
        image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=400&fit=crop',
        price: 35.99,
        category: 'minimalist',
        description: 'Simple elegant design',
      },
      {
        id: 'tile_005',
        title: 'Terracotta Classic',
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=400&fit=crop',
        price: 40.99,
        category: 'classic',
        description: 'Traditional terracotta styling',
      },
      {
        id: 'tile_006',
        title: 'Rustic Charm',
        image: 'https://images.unsplash.com/photo-1576673699887-3bdda6dcc246?w=400&h=400&fit=crop',
        price: 50.99,
        category: 'rustic',
        description: 'Rustic textured finish',
      },
    ]

    setTiles(mockTiles)
    setFilteredTiles(mockTiles)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    const filtered = tiles.filter((tile) =>
      tile.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredTiles(filtered)
  }, [searchTerm, tiles])

  if (isLoading) return <Loading />

  return (
    <div className="container-main">
      {/* Search Bar */}
      <div className="mb-12">
        <div className="hero-input-container">
          <input
            type="text"
            placeholder="Search tiles by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered input-lg w-full bg-gradient-to-r from-indigo-50 to-purple-50"
          />
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-lg text-gray-600">
          Found <span className="font-bold text-indigo-600">{filteredTiles.length}</span> tiles
        </p>
      </div>

      {/* Tiles Grid */}
      {filteredTiles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTiles.map((tile) => (
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
                <div className="badge badge-primary mt-2">{tile.category}</div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-indigo-600">${tile.price}</span>
                  <Link
                    href={`/tile/${tile.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-2xl text-gray-600">No tiles found matching your search.</p>
          <button
            onClick={() => setSearchTerm('')}
            className="btn btn-primary mt-6"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  )
}
