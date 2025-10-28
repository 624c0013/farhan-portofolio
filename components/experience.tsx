"use client"

import { useState } from "react"

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const experiences = [
    {
      id: "1",
      position: "Junior Frontend Developer",
      company: "PT Teknologi Digital Indonesia",
      duration: "Januari 2024 - Sekarang",
      description:
        "Mengembangkan antarmuka pengguna yang responsif menggunakan React dan Tailwind CSS. Berkolaborasi dengan tim desain untuk mengimplementasikan mockup menjadi komponen yang fungsional.",
      technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
      achievements: [
        "Meningkatkan performa website sebesar 40% melalui optimasi kode",
        "Mengimplementasikan 15+ fitur baru berdasarkan feedback pengguna",
        "Mentoring 2 developer junior dalam best practices React",
      ],
    },
    {
      id: "2",
      position: "Web Development Intern",
      company: "Startup Tech Bandung",
      duration: "September 2023 - Desember 2023",
      description:
        "Magang sebagai web developer dengan fokus pada frontend development. Belajar langsung dari senior developer tentang praktik terbaik dalam pengembangan web.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      achievements: [
        "Menyelesaikan 8 proyek website dari awal hingga deployment",
        "Mempelajari workflow Git dan kolaborasi tim menggunakan GitHub",
        "Mengimplementasikan responsive design untuk 5+ halaman website",
      ],
    },
    {
      id: "3",
      position: "Freelance Web Developer",
      company: "Klien Independen",
      duration: "Mei 2023 - Agustus 2023",
      description:
        "Mengembangkan website custom untuk berbagai klien dengan kebutuhan yang berbeda-beda. Menangani komunikasi klien dan project management secara mandiri.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
      achievements: [
        "Menyelesaikan 6 proyek website dengan kepuasan klien 100%",
        "Meningkatkan skill komunikasi dan project management",
        "Membangun portfolio dengan hasil kerja berkualitas tinggi",
      ],
    },
    {
      id: "4",
      position: "Web Development Bootcamp Graduate",
      company: "Coding Academy Indonesia",
      duration: "Januari 2023 - April 2023",
      description:
        "Mengikuti intensive bootcamp 3 bulan untuk mempelajari full-stack web development. Menyelesaikan capstone project dengan teknologi modern.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      achievements: [
        "Menyelesaikan 20+ mini projects dan 1 capstone project",
        "Mendapatkan sertifikat Full-Stack Web Developer",
        "Membangun aplikasi e-commerce dengan React dan Node.js",
      ],
    },
    {
      id: "5",
      position: "Self-Taught Developer",
      company: "Pembelajaran Mandiri",
      duration: "September 2022 - Desember 2022",
      description:
        "Memulai perjalanan belajar web development secara mandiri melalui online courses dan tutorial. Membangun fondasi yang kuat dalam HTML, CSS, dan JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      achievements: [
        "Menyelesaikan 50+ jam online courses dari Udemy dan freeCodeCamp",
        "Membuat 10+ project sederhana untuk mempraktikkan konsep",
        "Membangun portfolio pertama dengan 5 project showcase",
      ],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pengalaman Kerja</h2>
        <p className="text-lg text-muted-foreground mb-12">
          Perjalanan saya dalam dunia web development selama 5 tahun terakhir
        </p>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-1 h-12 bg-gradient-to-b from-primary to-secondary"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>

              {/* Content card */}
              <div
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                className="ml-20 bg-white/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/40"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                    <p className="text-primary font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium bg-gradient-to-r from-primary/20 to-secondary/20 text-primary px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expandable achievements */}
                {expandedId === exp.id && (
                  <div className="mt-4 pt-4 border-t border-primary/20 animate-fade-in">
                    <h4 className="font-semibold text-foreground mb-3">Pencapaian:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex gap-3 text-muted-foreground">
                          <span className="text-primary font-bold">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Expand indicator */}
                <div className="mt-4 text-center">
                  <span className="text-sm text-primary font-semibold">
                    {expandedId === exp.id ? "Sembunyikan detail" : "Lihat detail"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
