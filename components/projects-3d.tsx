"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "3D Portfolio Website",
      description: "Interactive portfolio with Three.js animations and glassmorphism design",
      image: "/3d-portfolio-website.png",
      tags: ["React", "Three.js", "TypeScript"],
      demo: "#",
      github: "#",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack online store with payment integration and admin dashboard",
      image: "/ecommerce-platform-concept.png",
      tags: ["Next.js", "Node.js", "MongoDB"],
      demo: "#",
      github: "#",
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat app with AI-powered responses and modern UI",
      image: "/ai-chat-application.png",
      tags: ["React", "WebSocket", "OpenAI"],
      demo: "#",
      github: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task manager with drag-and-drop functionality",
      image: "/task-management-app-interface.png",
      tags: ["TypeScript", "React", "Firebase"],
      demo: "#",
      github: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with real-time data and forecasts",
      image: "/weather-dashboard.png",
      tags: ["React", "API", "Charts"],
      demo: "#",
      github: "#",
    },
    {
      title: "Social Media Clone",
      description: "Full-featured social platform with posts, likes, and comments",
      image: "/social-media-app-interface.png",
      tags: ["Next.js", "PostgreSQL", "Prisma"],
      demo: "#",
      github: "#",
    },
  ]

  return (
    <section id="projects" className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of my recent works showcasing my skills in web development and design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-strong rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs glass rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <motion.a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-lg text-sm font-semibold hover:scale-105 transition-transform"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm font-semibold hover:glass-strong transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
