interface Author {
  name: string
  affiliation?: string
}

interface ProjectDetailProps {
  title: string
  authors: Author[]
  tags: string[]
  abstract: string
  links?: {
    pdf?: string
    arxiv?: string
    bibtex?: string
  }
}

export default function ProjectDetail({ title, authors, tags, abstract, links }: ProjectDetailProps) {
  const venue = tags.find((t) => ["ICLR", "CVPR", "NeurIPS", "ICML", "IROS"].includes(t))
  const year = tags.find((t) => /^\d{4}$/.test(t))

  return (
    <div className="max-w-6xl mx-auto flex gap-16">
      <aside className="w-64 flex-shrink-0">
        <div className="sticky top-24">
          <div className="pb-6 mb-6 border-b border-zinc-200 dark:border-zinc-800">
            <h3 className="text-sm font-semibold mb-3">Links</h3>
            <div className="flex flex-col gap-2">
              {links?.pdf && (
                <a href={links.pdf} className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PDF
                </a>
              )}
              {links?.arxiv && (
                <a href={links.arxiv} className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  ArXiv
                </a>
              )}
              {links?.bibtex !== undefined && (
                <button className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors flex items-center gap-2 text-left">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  Copy BibTeX
                </button>
              )}
            </div>
          </div>

          <div className="pb-6 mb-6 border-b border-zinc-200 dark:border-zinc-800">
            <h3 className="text-sm font-semibold mb-3">Publication</h3>
            <p className="text-sm text-zinc-500">{venue} {year}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Topics</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs border border-zinc-300 dark:border-zinc-700 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-1">
        <h1 className="text-4xl font-bold tracking-tight mb-12">{title}</h1>

        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4">Authors</h2>
          <div className="flex flex-wrap gap-6">
            {authors.map((author) => (
              <div key={author.name}>
                <p className="text-sm font-medium">{author.name}</p>
                {author.affiliation && (
                  <p className="text-xs text-zinc-500">{author.affiliation}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Abstract</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {abstract}
          </p>
        </section>
      </div>
    </div>
  )
}
