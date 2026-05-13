'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface TileDetail {
  id: string
  title: string
  image: string
  price: number
  description: string
  dimensions: string
  material: string
  category: string
  inStock: boolean
  creator?: string
  tags?: string[]
}

export default function TileDetailsPage() {
  const { id } = useParams()
  const [tile, setTile] = useState<TileDetail | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Mock data
    const mockTile: TileDetail = {
      id: id as string,
      title: 'Premium Ceramic Blue Tile',
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=800&h=800&fit=crop',
      price: 45.99,
      description:
        'This premium ceramic tile features a beautiful blue glaze finish that brings elegance and sophistication to any space. Each tile is carefully handcrafted to ensure the highest quality and durability. Perfect for kitchens, bathrooms, or accent walls.',
      dimensions: '60x60 cm',
      material: 'Ceramic',
      category: 'Ceramic',
      inStock: true,
      creator: 'Artistic Tiles Co.',
      tags: ['Minimalist', 'Blue', 'Premium', 'Handcrafted'],
    }
    setTile(mockTile)
    setIsLoading(false)
  }, [id])

  if (isLoading) {
    return (
      <div className="container-main">
        <div className="h-96 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>
    )
  }

  if (!tile) {
    return (
      <div className="container-main text-center">
        <h1 className="text-3xl font-bold mb-4">Tile Not Found</h1>
        <Link href="/all-tiles" className="btn btn-primary">
          Back to All Tiles
        </Link>
      </div>
    )
  }

  return (
    <div className="container-main">
      {/* Breadcrumb */}
      <div className="breadcrumbs text-sm mb-8">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all-tiles">All Tiles</Link>
          </li>
          <li>{tile.title}</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left - Image */}
        <div className="flex items-center justify-center">
          <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={tile.image}
              alt={tile.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right - Details */}
        <div className="space-y-6">
          {/* Title & Price */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{tile.title}</h1>
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-indigo-600">${tile.price}</span>
              <span className={`badge badge-lg ${tile.inStock ? 'badge-success' : 'badge-error'}`}>
                {tile.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-bold mb-2">Description</h3>
            <p className="text-gray-700 leading-relaxed">{tile.description}</p>
          </div>

          {/* Creator & Style */}
          <div className="grid grid-cols-2 gap-4">
            {tile.creator && (
              <div>
                <p className="text-sm text-gray-500">Creator</p>
                <p className="font-semibold">{tile.creator}</p>
              </div>
            )}
            <div>
              <p className="text-sm text-gray-500">Style</p>
              <p className="font-semibold">{tile.category}</p>
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <h3 className="text-lg font-bold">Specifications</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Dimensions</p>
                <p className="font-semibold">{tile.dimensions}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Material</p>
                <p className="font-semibold">{tile.material}</p>
              </div>
            </div>
          </div>

          {/* Tags */}
          {tile.tags && tile.tags.length > 0 && (
            <div>
              <p className="text-sm text-gray-500 mb-2">Tags</p>
              <div className="flex flex-wrap gap-2">
                {tile.tags.map((tag, index) => (
                  <span key={index} className="badge badge-outline">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-4 pt-6">
            <button className="btn btn-primary flex-1" disabled={!tile.inStock}>
              Add to Cart
            </button>
            <button className="btn btn-outline flex-1">
              ♡ Wishlist
            </button>
          </div>

          {/* Back Button */}
          <Link href="/all-tiles" className="btn btn-ghost w-full">
            ← Back to All Tiles
          </Link>
        </div>
      </div>

      {/* Related Tiles Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Related Tiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="card bg-white shadow-lg">
              <figure className="h-48 bg-gray-200"></figure>
              <div className="card-body">
                <h3 className="card-title">Related Tile #{i}</h3>
                <p className="text-gray-600">$49.99</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
