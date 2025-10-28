"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center gap-8">
          <div
            className={`relative w-32 h-32 md:w-40 md:h-40 transition-all duration-1000 ${isLoaded ? "animate-scale-in" : "opacity-0"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl opacity-50 animate-glow"></div>
            <Image
              src="/professional-developer-portrait-photo.jpg"
              alt="Farhan Rakhmat Bachtiar"
              fill
              className="rounded-full object-cover border-4 border-primary shadow-lg relative z-10"
              priority
            />
          </div>

          <div className={`transition-all duration-1000 ${isLoaded ? "animate-fade-in-down" : "opacity-0"}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-2 text-balance">
              Farhan Rakhmat Bachtiar
            </h1>
            <p className="text-lg md:text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold mb-6">
              Developer Pemula | Penggemar Web Development
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance max-w-2xl">
              Bersemangat dalam menciptakan pengalaman digital yang indah, fungsional, dan user-friendly. Saat ini
              sedang belajar web development dengan HTML, CSS, JavaScript, dan React.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <Link href="/portfolio">
              <Button size="lg" className="btn-accent w-full sm:w-auto">
                Lihat Karya Saya
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" className="btn-accent-outline w-full sm:w-auto">
                Hubungi Saya
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
