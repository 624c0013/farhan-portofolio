import Navigation from "@/components/navigation"
import PortfolioGrid from "@/components/portfolio-grid"
import Footer from "@/components/footer"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">My Projects</h1>
          <p className="text-lg text-muted-foreground mb-12">
            A selection of projects I've worked on, showcasing my skills and experience.
          </p>
          <PortfolioGrid />
        </div>
      </section>
      <Footer />
    </main>
  )
}
