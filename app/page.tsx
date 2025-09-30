export const dynamic = 'force-static'
export const revalidate = 86400
import Header from "@/components/header"
import MainContent from "@/components/main-content"
import CustomCursor from "@/components/custom-cursor"
import ScrollProgress from "@/components/scroll-progress"

export default function Home() {

  return (
    <div className="min-h-screen text-slate-300 relative">
      <CustomCursor />
      <ScrollProgress />

      {/* Smooth red background overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/10 via-transparent to-red-900/5"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-red-950/5 to-red-800/8"></div>
      </div>

      {/* Mouse spotlight effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(239, 68, 68, 0.2), transparent 80%)`,
        }}
      ></div>

      <div className="relative z-40">
        <Header />
        <MainContent />
      </div>
    </div>
  )
}
