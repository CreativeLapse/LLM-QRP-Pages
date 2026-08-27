"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ResearchCard from "../components/ResearchCard"
import papers from "../../data/papers.json"

const filters = {
  Topics: ["Quantization", "LLMs", "Reasoning"],
  Venues: ["ICLR"],
  "Year Published": ["2027"],
}

export default function ResearchPage() {
  const [openFilter, setOpenFilter] = useState<string | null>(null)
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const toggleFilter = (option: string) => {
    setSelectedFilters((prev) =>
      prev.includes(option)
        ? prev.filter((f) => f !== option)
        : [...prev, option]
    )
  }

  const filteredPapers = papers.filter((paper) => {
    if (selectedFilters.length === 0) return true
    return selectedFilters.some((filter) => paper.tags.includes(filter))
  })

  return (
    <>
      <Navbar />
      <main className="flex-1 px-16 py-16">
        <section className="mb-24 pb-12 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-start justify-between mb-12">
            <h1 className="text-5xl font-bold tracking-tight" style={{ fontFamily: "var(--font-space-mono), monospace" }}>Research</h1>
            <div className="max-w-lg text-right">
              <p className="text-base text-zinc-600 dark:text-zinc-400 mb-4">
                Advancing the state of the art LLMs
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">
                Our research pushes the boundaries of what language models can achieve.
                Check out our latest work below to see how we are advancing the field.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 flex gap-16">
          <div className="w-48 flex-shrink-0">
            <p className="text-sm font-medium mb-4">Filter by</p>
            <div className="flex flex-col gap-3">
              {Object.entries(filters).map(([name, options]) => (
                <div key={name}>
                  <button
                    onClick={() => setOpenFilter(openFilter === name ? null : name)}
                    className="px-4 py-2 text-sm border border-zinc-300 dark:border-zinc-700 rounded-full hover:border-zinc-500 dark:hover:border-zinc-500 transition-colors text-left w-full flex items-center justify-between"
                  >
                    {name}
                    <span className="text-xs text-zinc-400">{openFilter === name ? "−" : "+"}</span>
                  </button>
                  {openFilter === name && (
                    <div className="mt-2 ml-2 flex flex-col gap-2">
                      {options.map((option) => (
                        <label key={option} className="flex items-center gap-2 text-sm text-zinc-500 cursor-pointer hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
                          <input
                            type="checkbox"
                            className="w-3 h-3 accent-zinc-500"
                            checked={selectedFilters.includes(option)}
                            onChange={() => toggleFilter(option)}
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 flex-1">
            {filteredPapers.map((paper) => (
              <ResearchCard key={paper.title} {...paper} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
