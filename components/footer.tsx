"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <a
                href="#"
                className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              >
                Yadav.Dev
              </a>
            </div>

            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
              <a href="#skills" className="hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#projects" className="hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
            <p>© {currentYear} Yadav.Dev. All rights reserved. Built with React, Next.js, and Tailwind CSS.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
