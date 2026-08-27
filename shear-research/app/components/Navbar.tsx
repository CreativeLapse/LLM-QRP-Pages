import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-16 py-5">
      <Link href="/" className="flex flex-col leading-none">
        <span className="text-3xl font-bold tracking-tight">SHEΛR</span>
        <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-zinc-500">research</span>
      </Link>
      <div className="flex items-center gap-10">
        <Link
          href="/research"
          className="text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
        >
          Research
        </Link>
        <span
          className="text-sm font-medium text-zinc-400 dark:text-zinc-600 cursor-not-allowed relative group"
        >
          Blog
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Under development
          </span>
        </span>
      </div>
    </nav>
  );
}
