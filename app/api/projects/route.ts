import { getProjects } from '@/data/projects'

export const dynamic = 'force-static'
export const revalidate = 86400 // 24h

export async function GET() {
  const body = getProjects()
  return Response.json(body, {
    headers: {
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
    },
  })
}

