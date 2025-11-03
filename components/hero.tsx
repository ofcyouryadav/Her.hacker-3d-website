"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-8">
      <motion.div className="max-w-4xl w-full" variants={containerVariants} initial="hidden" animate="visible">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-2">
              <motion.h1 className="text-5xl md:text-6xl font-bold text-balance" variants={itemVariants}>
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Yadav.Dev
                </span>
              </motion.h1>
              <motion.h2 className="text-2xl md:text-3xl text-muted-foreground" variants={itemVariants}>
                Full Stack & Discord Bot Developer
              </motion.h2>
            </div>

            <motion.p className="text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>
              I craft beautiful, responsive web applications and powerful Discord bots. With expertise in modern
              JavaScript frameworks and backend technologies, I turn ideas into reality.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:gap-3"
              >
                View My Work
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary hover:bg-primary/10 rounded-lg font-semibold transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div className="flex gap-8 pt-8 border-t border-border" variants={itemVariants}>
              <div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div className="flex justify-center" variants={itemVariants}>
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-3xl opacity-20 animate-float"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-card to-card/50 rounded-2xl border-2 border-primary/30 overflow-hidden flex items-center justify-center">
                <div className="relative w-64 h-64 rounded-xl overflow-hidden">
                  <Image src="/profile.jpg" alt="Yadav.Dev Profile" fill className="object-cover" priority />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
