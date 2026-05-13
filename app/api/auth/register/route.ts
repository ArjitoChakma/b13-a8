import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, password, photoUrl } = body

    if (!name || !email || !password || !photoUrl) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      )
    }

    // Mock registration - Replace with actual authentication
    const user = {
      id: `user_${Date.now()}`,
      name,
      email,
      photoUrl,
      createdAt: new Date().toISOString(),
    }

    const token = `token_${Date.now()}`

    return NextResponse.json(
      {
        success: true,
        data: {
          user,
          token,
        },
        message: 'Registration successful',
      },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Registration failed',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
