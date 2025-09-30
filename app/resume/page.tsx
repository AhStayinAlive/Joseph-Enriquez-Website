import { redirect } from 'next/navigation'

export const dynamic = 'force-static'

export default function Page() {
  redirect(process.env.NEXT_PUBLIC_LINKEDIN_URL ?? 'https://www.linkedin.com/in/joseph-dean-te-enriquez/')
}

