interface ResearchCardProps {
  title: string
  authors: string
  tags: string[]
  pdfUrl?: string
}

export default function ResearchCard({ title, authors, tags, pdfUrl = "#" }: ResearchCardProps) {
  return (
    <article className="group pb-6 border-b border-zinc-200 dark:border-zinc-800 last:border-b-0">
      <h2 className="text-2xl font-semibold mb-3 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">{title}</h2>
      <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-4">{authors}</p>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap items-center text-xs text-zinc-500">
          {tags.map((tag, i) => (
            <span key={tag}>
              {tag}
              {i < tags.length - 1 && <span className="mx-2">|</span>}
            </span>
          ))}
        </div>
        <a href={pdfUrl} className="p-2 border border-zinc-300 dark:border-zinc-700 rounded hover:border-zinc-500 dark:hover:border-zinc-500 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>
      </div>
    </article>
  )
}
