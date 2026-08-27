"use client"

import Navbar from "./components/Navbar"
import { ShaderBackground } from "./components/ShaderBackground"
import { ResearchText } from "./components/ResearchText"
import Footer from "./components/Footer"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 px-16 py-16">
        <section className="flex gap-16 mb-24">
          <h1 className="text-5xl font-bold tracking-tight flex-1">
            AI <Link href="/research" className="underline underline-offset-4 hover:text-zinc-600 transition-colors">research</Link> that makes the world a better place
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1">
            We focus on researching all things machine learning related. Our work spans
            the full spectrum of AI research, from foundational theory to applied systems,
            with the goal of building machines that can reason, learn, and generalize
            across any domain.
          </p>
        </section>
        <div className="relative w-full h-[600px] overflow-hidden">
          <ShaderBackground className="absolute inset-0" />
          <div className="absolute bottom-8 right-8 w-[400px] h-[100px]">
            <ResearchText />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <a
            href="https://www.linkedin.com/in/yigitalpoztorun/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-400 transition-colors"
          >
            @yigitalpoztorun
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
