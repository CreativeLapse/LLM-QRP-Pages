import Link from "next/link"

const ExternalArrow = () => (
  <svg className="w-3 h-3 inline-block ml-1 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400">
      <div className="max-w-5xl mx-auto px-16 pt-16 pb-8">
        <div className="flex justify-center gap-24">
          <div className="flex flex-col items-center">
            <span
              className="text-6xl font-bold tracking-tight text-transparent"
              style={{ WebkitTextStroke: "1.5px white" }}
            >
              Λ
            </span>
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-zinc-500 mt-1">research</span>
          </div>
          <div className="flex gap-20">
            <div className="flex flex-col gap-3">
              <h4 className="text-white text-sm font-medium mb-2">Research</h4>
              <Link href="/research" className="text-sm hover:text-zinc-300 transition-colors">Publications</Link>
              <Link href="/research" className="text-sm hover:text-zinc-300 transition-colors">Projects</Link>
              <Link href="/research" className="text-sm hover:text-zinc-300 transition-colors">Open Source</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-white text-sm font-medium mb-2">Company</h4>
              <Link href="/blog" className="text-sm hover:text-zinc-300 transition-colors">Blog</Link>
              <Link href="/" className="text-sm hover:text-zinc-300 transition-colors">About</Link>
              <Link href="/" className="text-sm hover:text-zinc-300 transition-colors">Careers</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-white text-sm font-medium mb-2">Connect</h4>
              <a href="https://www.linkedin.com/in/yigitalpoztorun/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-zinc-300 transition-colors">LinkedIn<ExternalArrow /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-zinc-300 transition-colors">GitHub<ExternalArrow /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-zinc-300 transition-colors">Twitter<ExternalArrow /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-800 max-w-5xl mx-auto px-16 py-6 flex items-center justify-center gap-8 text-xs text-zinc-500">
        <span>&copy; {new Date().getFullYear()} SHEΛR Research</span>
        <span className="text-zinc-700">|</span>
        <span>@Roshan Iruku</span>
        <span className="text-zinc-700">|</span>
        <button className="hover:text-zinc-300 transition-colors">Set Cookies</button>
      </div>
    </footer>
  )
}
