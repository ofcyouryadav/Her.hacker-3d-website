"use client"

import { useEffect, useRef } from "react"
import Hero from "@/components/hero-3d"
import About from "@/components/about-3d"
import Projects from "@/components/projects-3d"
import Social from "@/components/social-3d"
import Contact from "@/components/contact-3d"
import Navigation from "@/components/navigation-3d"

export default function Home() {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <div
        ref={(el) => {
          if (el) sectionRefs.current["hero"] = el
        }}
      >
        <Hero />
      </div>
      <div
        ref={(el) => {
          if (el) sectionRefs.current["about"] = el
        }}
      >
        <About />
      </div>
      <div
        ref={(el) => {
          if (el) sectionRefs.current["projects"] = el
        }}
      >
        <Projects />
      </div>
      <div
        ref={(el) => {
          if (el) sectionRefs.current["social"] = el
        }}
      >
        <Social />
      </div>
      <div
        ref={(el) => {
          if (el) sectionRefs.current["contact"] = el
        }}
      >
        <Contact />
      </div>
    </main>
  )
}
