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
        <Link
          href="/blog"
          className="text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
        >
          Blog
        </Link>
      </div>
    </nav>
  );
}
