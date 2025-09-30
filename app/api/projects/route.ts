import { NextResponse } from 'next/server'
import projects from '@/data/projects'

export const revalidate = 60 * 60 * 24
export const runtime = 'edge'

export async function GET() {
  return new NextResponse(JSON.stringify(projects), {
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=86400, stale-while-revalidate=604800',
    },
  })
}

