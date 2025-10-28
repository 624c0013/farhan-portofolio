"use client"

import { useState } from "react"
import Image from "next/image"

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills = [
    { name: "HTML", level: 85, color: "from-orange-400 to-orange-600" },
    { name: "CSS", level: 80, color: "from-blue-400 to-blue-600" },
    { name: "JavaScript", level: 75, color: "from-yellow-400 to-yellow-600" },
    { name: "React", level: 70, color: "from-cyan-400 to-cyan-600" },
    { name: "Next.js", level: 65, color: "from-gray-400 to-gray-600" },
    { name: "Tailwind CSS", level: 80, color: "from-teal-400 to-teal-600" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image src="/developer-working-at-desk-coding.jpg" alt="Farhan working on projects" fill className="object-cover" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Farhan Rakhmat Bachtiar, a semester 3 Informatika student passionate about web development. I'm
              actively learning modern web technologies and building projects to strengthen my skills in creating
              beautiful and functional digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing
              knowledge with the developer community.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">Skills & Proficiency</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="cursor-pointer transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className={`font-semibold transition-all duration-300 ${
                        hoveredSkill === skill.name ? "text-primary text-lg" : "text-foreground"
                      }`}
                    >
                      {skill.name}
                    </span>
                    <span
                      className={`text-sm font-medium transition-all duration-300 ${
                        hoveredSkill === skill.name ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-500 ease-out ${
                        hoveredSkill === skill.name ? "shadow-lg" : ""
                      }`}
                      style={{
                        width: hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
