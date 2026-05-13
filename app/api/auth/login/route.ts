import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Mock login - Replace with actual authentication
    const user = {
      id: 'user_001',
      name: 'John Doe',
      email,
      photoUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
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
        message: 'Login successful',
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Login failed',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
