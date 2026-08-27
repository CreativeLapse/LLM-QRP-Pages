import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import ProjectDetail from "../../components/ProjectDetail"
import publications from "../../../data/publications"

export function generateStaticParams() {
  return publications.map((paper) => ({ slug: paper.slug }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const paper = publications.find((p) => p.slug === slug)

  if (!paper) {
    return (
      <>
        <Navbar />
        <main className="flex-1 px-16 py-16">
          <p>Paper not found.</p>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 px-16 py-16">
        <ProjectDetail {...paper} />
      </main>
      <Footer />
    </>
  )
}
