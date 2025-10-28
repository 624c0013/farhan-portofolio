import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-50">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Footer />
    </main>
  )
}
