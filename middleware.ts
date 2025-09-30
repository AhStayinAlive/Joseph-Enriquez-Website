import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const targets = new Set(['/resume', '/cv', '/resume.pdf', '/cv.pdf'])
const LINKEDIN = 'https://www.linkedin.com/in/YOUR-HANDLE/'

export function middleware(req: NextRequest) {
  const url = new URL(req.url)
  if (targets.has(url.pathname.toLowerCase())) {
    return NextResponse.redirect(LINKEDIN, 307)
  }
}

export const config = { matcher: ['/resume', '/cv', '/resume.pdf', '/cv.pdf'] }

