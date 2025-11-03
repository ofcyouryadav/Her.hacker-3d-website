"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React frontend and Node.js backend. Features include product filtering, shopping cart, and secure payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "🛍️",
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      title: "Discord Bot Manager",
      description:
        "Advanced Discord bot with moderation tools, music streaming, and custom commands. Built with discord.py and integrated with multiple APIs.",
      tags: ["Python", "Discord.py", "API Integration"],
      image: "🤖",
      links: {
        github: "#",
      },
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates. Features include team collaboration, notifications, and data persistence.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "✅",
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website with smooth animations. Built with Next.js and features a blog section and project showcase.",
      tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
      image: "💼",
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather application that provides detailed forecasts and weather alerts. Integrated with multiple weather APIs for accurate data.",
      tags: ["React", "API", "Chart.js"],
      image: "🌤️",
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      title: "Social Media Analytics",
      description:
        "Analytics dashboard for social media metrics with data visualization. Tracks engagement, followers, and provides actionable insights.",
      tags: ["React", "Node.js", "Chart.js", "PostgreSQL"],
      image: "📊",
      links: {
        github: "#",
        live: "#",
      },
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col">
                  <div className="text-5xl mb-4">{project.image}</div>

                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-border">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors duration-300"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2 text-sm font-medium bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
