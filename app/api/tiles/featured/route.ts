import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Mock featured tiles
    const featuredTiles = [
      {
        id: 'tile_001',
        title: 'Ceramic Blue Tile',
        image: 'https://picsum.photos/400/400?random=1',
        price: 45.99,
        category: 'ceramic',
        description: 'Premium ceramic tile with blue glaze finish',
        dimensions: '60x60 cm',
        material: 'Ceramic',
        inStock: true,
      },
      {
        id: 'tile_002',
        title: 'Modern Geometric Pattern',
        image: 'https://picsum.photos/400/400?random=2',
        price: 55.99,
        category: 'modern',
        description: 'Contemporary geometric design for modern spaces',
        dimensions: '60x60 cm',
        material: 'Ceramic',
        inStock: true,
      },
      {
        id: 'tile_003',
        title: 'Marble Elegance',
        image: 'https://picsum.photos/400/400?random=3',
        price: 65.99,
        category: 'marble',
        description: 'Luxurious marble-effect tile',
        dimensions: '60x60 cm',
        material: 'Marble',
        inStock: true,
      },
      {
        id: 'tile_004',
        title: 'Minimalist Monochrome',
        image: 'https://picsum.photos/400/400?random=4',
        price: 35.99,
        category: 'minimalist',
        description: 'Simple yet elegant monochrome design',
        dimensions: '60x60 cm',
        material: 'Ceramic',
        inStock: true,
      },
    ]

    return NextResponse.json(
      {
        success: true,
        data: featuredTiles,
        message: 'Featured tiles fetched successfully',
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch featured tiles',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
