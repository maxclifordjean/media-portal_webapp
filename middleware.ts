import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import userPool from "./utils/userPool";
import {tokenVerify} from "./utils/tokenVerify";
import * as TokenAccess from "./utils/tokenAccess";

// Define public routes that don't require authentication
const publicRoutes: string | any[] = ['/login'];

export async function middleware(request: NextRequest) {
  const loginUrl = new URL("https://portal.clifftechnologies.co/login", request.url);
  const token = await TokenAccess.get();
  const { pathname } = request.nextUrl;

  // Allow access to public routes without authentication
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Check if user is authenticated
  if (!token) {
    // Redirect to login page if no token
    return NextResponse.redirect(loginUrl);
  }
  
  // Verify if session is valid based on stored token
  const isValidToken = await tokenVerify(userPool.poolData.UserPoolId, token.value, userPool.poolData.ClientId);
  
  if (!isValidToken){ // Redirect to login page if invalid token
    return NextResponse.redirect(loginUrl);
  }

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