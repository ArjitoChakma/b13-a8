import { NextRequest, NextResponse } from 'next/server'

/**
 * Middleware to protect private routes
 * Requires authentication to access certain routes
 */

const PRIVATE_ROUTES = ['/tile/', '/my-profile']

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if the route is private
  const isPrivateRoute = PRIVATE_ROUTES.some((route) =>
    pathname.startsWith(route)
  )

  if (isPrivateRoute) {
    // Check if user is authenticated
    const token = request.cookies.get('auth-token')?.value

    if (!token) {
      // Redirect to login if not authenticated
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('from', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
}
