"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Zap, Coffee } from "lucide-react"

export default function About() {
  const skills = [
    { name: "HTML", level: 95, color: "from-orange-500 to-red-500" },
    { name: "CSS", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", level: 92, color: "from-yellow-500 to-orange-500" },
    { name: "React.js", level: 88, color: "from-cyan-500 to-blue-500" },
    { name: "Next.js", level: 85, color: "from-gray-700 to-gray-900" },
    { name: "TypeScript", level: 87, color: "from-blue-600 to-blue-800" },
    { name: "Java", level: 80, color: "from-red-600 to-orange-600" },
  ]

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful user experiences",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized for speed and efficiency",
    },
    {
      icon: Coffee,
      title: "Powered by Coffee",
      description: "Fueled by curiosity and caffeine",
    },
  ]

  return (
    <section id="about" className="min-h-screen py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-strong rounded-2xl p-8 border border-primary/20">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Hey! I'm <span className="text-primary font-semibold">Her.Hacker</span>, a self-taught developer
                specializing in modern web technologies. I focus on building fast, responsive, and visually stunning
                digital experiences.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                My journey is powered by curiosity, coffee, and clean code. I love exploring new technologies and
                pushing the boundaries of what's possible on the web.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl p-4 hover:glass-strong transition-all group"
                >
                  <feature.icon className="text-primary mb-2 group-hover:scale-110 transition-transform" size={24} />
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-3 glass rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
