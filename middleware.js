import { NextResponse } from 'next/server'

let locales = ['en', 'sr']

export function middleware(request) {
  const { pathname } = request.nextUrl
  
  // 1. Proveri da li putanja već ima jezik
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // 2. Ako nema jezika, preusmeri na /sr (podrazumevani)
  const locale = 'sr'
  request.nextUrl.pathname = `/${locale}${pathname}`
  
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // OVO JE NAJBITNIJE: Middleware NE SME da dira fajlove sa tačkom (css, js, png)
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
}