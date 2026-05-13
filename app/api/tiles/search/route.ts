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
        image: 'https://picsum.photos/400/400?random=1',
        price: 45.99,
        category: 'ceramic',
      },
      {
        id: 'tile_002',
        title: 'Modern Geometric Pattern',
        image: 'https://picsum.photos/400/400?random=2',
        price: 55.99,
        category: 'modern',
      },
      {
        id: 'tile_003',
        title: 'Marble Elegance',
        image: 'https://picsum.photos/400/400?random=3',
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
