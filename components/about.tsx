"use client"

import { motion } from "framer-motion"

export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Discord Bot Development",
    "TypeScript",
    "REST APIs",
  ]

  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">About Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate full-stack developer with a deep interest in creating seamless digital experiences. With
            expertise in modern web technologies and Discord bot development, I combine creativity with technical
            excellence to build solutions that matter.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            My journey in tech has been defined by continuous learning and a drive to solve complex problems. Whether
            building responsive web applications or creating feature-rich Discord bots, I bring attention to detail and
            a user-first approach to every project.
          </p>

          <div>
            <h3 className="text-2xl font-bold mb-6">Core Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-3 bg-card border border-primary/20 rounded-lg text-center font-medium hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
