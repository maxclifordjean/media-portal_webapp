import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware for media-portal
 * 
 * Verifies authentication token and redirects to auth_webapp if needed
 */

// Auth app URL from environment
const authAppURL = process.env.NEXT_PUBLIC_AUTH_APP_URL || 'http://localhost:3000';

// Public routes accessible without authentication
const publicRoutes = ['/login', '/auth'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public routes
  if (publicRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Check for authentication token in cookies
  const token = request.cookies.get('smedia_auth_token')?.value;
  const tokenExpiry = request.cookies.get('smedia_token_expiry')?.value;

  // No token found - redirect to login
  if (!token) {
    console.log('[Middleware] No auth token found, redirecting to login');
    return NextResponse.redirect(new URL(authAppURL, request.url));
  }

  // Token expired - redirect to login
  if (tokenExpiry) {
    const expiryTime = parseInt(tokenExpiry);
    const now = new Date().getTime();
    
    if (now > expiryTime) {
      console.log('[Middleware] Token expired, redirecting to login');
      return NextResponse.redirect(new URL(authAppURL, request.url));
    }
  }

  // Token is valid - proceed
  return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api (API routes)
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. /_vercel (Vercel internals)
     * 5. all files in the public folder
     */
    '/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)',
  ],
};