import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const q = searchParams.get('q') || ''

    // Mock tiles data
    const allTiles = [
      {
        id: 'tile_001',
        title: 'Ceramic Blue Tile',
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=400&fit=crop',
        price: 45.99,
        category: 'ceramic',
      },
      {
        id: 'tile_002',
        title: 'Modern Geometric Pattern',
        image: 'https://images.unsplash.com/photo-1576673699887-3bdda6dcc246?w=400&h=400&fit=crop',
        price: 55.99,
        category: 'modern',
      },
      {
        id: 'tile_003',
        title: 'Marble Elegance',
        image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=400&fit=crop',
        price: 65.99,
        category: 'marble',
      },
    ]

    // Filter by search query
    const filtered = q
      ? allTiles.filter((tile) =>
          tile.title.toLowerCase().includes(q.toLowerCase())
        )
      : allTiles

    return NextResponse.json({ success: true, data: filtered }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Search failed' },
      { status: 500 }
    )
  }
}
