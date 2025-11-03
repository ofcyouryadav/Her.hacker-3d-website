"use client"

import { motion } from "framer-motion"
import { Code2, Zap, Server, Bot } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: ["React.js", "HTML/CSS", "JavaScript", "Responsive Design"],
      proficiency: 95,
    },
    {
      icon: Server,
      title: "Backend",
      skills: ["Node.js", "REST APIs", "Database Design", "Server Management"],
      proficiency: 85,
    },
    {
      icon: Bot,
      title: "Discord Bots",
      skills: ["discord.py", "discord.js", "Automation", "Bot Management"],
      proficiency: 90,
    },
    {
      icon: Zap,
      title: "Tools & Others",
      skills: ["Git/GitHub", "TypeScript", "Deployment", "Performance Optimization"],
      proficiency: 88,
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 md:px-8">
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
                Skills & Expertise
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  <div className="space-y-3 mb-6">
                    {category.skills.map((skill) => (
                      <div key={skill} className="text-muted-foreground">
                        • {skill}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="font-semibold text-primary">{category.proficiency}%</span>
                    </div>
                    <div className="w-full h-2 bg-card border border-border rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${category.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
