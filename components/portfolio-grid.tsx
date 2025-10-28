import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function PortfolioGrid() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with product catalog, shopping cart, and payment integration.",
      tags: ["Next.js", "React", "Stripe", "PostgreSQL"],
      link: "https://github.com/624c0013",
      image: "/ecommerce-shopping-cart-interface.jpg",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      link: "https://github.com/624c0013",
      image: "/task-management-dashboard.png",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with real-time data, forecasts, and location-based features.",
      tags: ["Next.js", "API Integration", "Charts"],
      link: "https://github.com/624c0013",
      image: "/weather-app-dashboard.png",
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A modern blogging platform with markdown support, comments, and social sharing capabilities.",
      tags: ["Next.js", "MDX", "Supabase"],
      link: "https://github.com/624c0013",
      image: "/blog-platform-interface.jpg",
    },
    {
      id: 5,
      title: "Design System",
      description: "A comprehensive design system and component library for consistent UI across projects.",
      tags: ["React", "Storybook", "TypeScript"],
      link: "https://github.com/624c0013",
      image: "/design-system-components.png",
    },
    {
      id: 6,
      title: "Analytics Dashboard",
      description: "An interactive analytics dashboard with data visualization and real-time metrics.",
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
                View Project
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
