import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function PortfolioGrid() {
  const projects = [
    {
      id: 1,
      title: "Platform E-Commerce",
      description: "Solusi e-commerce full-stack dengan katalog produk, keranjang belanja, dan integrasi pembayaran.",
      tags: ["Next.js", "React", "Stripe", "PostgreSQL"],
      link: "https://github.com/624c0013",
      image: "/ecommerce-shopping-cart-interface.jpg",
    },
    {
      id: 2,
      title: "Aplikasi Manajemen Tugas",
      description: "Aplikasi manajemen tugas kolaboratif dengan pembaruan real-time dan fitur tim.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      link: "https://github.com/624c0013",
      image: "/task-management-dashboard.png",
    },
    {
      id: 3,
      title: "Dashboard Cuaca",
      description: "Aplikasi cuaca responsif dengan data real-time, prakiraan, dan fitur berbasis lokasi.",
      tags: ["Next.js", "API Integration", "Charts"],
      link: "https://github.com/624c0013",
      image: "/weather-app-dashboard.png",
    },
    {
      id: 4,
      title: "Platform Blog",
      description: "Platform blogging modern dengan dukungan markdown, komentar, dan kemampuan berbagi sosial.",
      tags: ["Next.js", "MDX", "Supabase"],
      link: "https://github.com/624c0013",
      image: "/blog-platform-interface.jpg",
    },
    {
      id: 5,
      title: "Sistem Desain",
      description: "Sistem desain komprehensif dan perpustakaan komponen untuk UI yang konsisten di seluruh proyek.",
      tags: ["React", "Storybook", "TypeScript"],
      link: "https://github.com/624c0013",
      image: "/design-system-components.png",
    },
    {
      id: 6,
      title: "Dashboard Analitik",
      description: "Dashboard analitik interaktif dengan visualisasi data dan metrik real-time.",
      tags: ["React", "Recharts", "Node.js"],
      link: "https://github.com/624c0013",
      image: "/analytics-dashboard-charts.png",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="flex flex-col hover:shadow-lg transition-all duration-300 overflow-hidden group"
        >
          <div className="relative w-full h-48 overflow-hidden bg-muted">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <Link href={project.link} target="_blank">
              <Button variant="outline" className="w-full bg-transparent">
                Lihat Proyek
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
