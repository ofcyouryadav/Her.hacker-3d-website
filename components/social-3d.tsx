"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Instagram, MessageCircle } from "lucide-react"

export default function Social() {
  const socials = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com",
      color: "from-gray-700 to-gray-900",
      description: "Check out my code",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
      color: "from-blue-600 to-blue-800",
      description: "Let's connect professionally",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com",
      color: "from-sky-500 to-blue-600",
      description: "Follow my tech journey",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com",
      color: "from-pink-500 to-purple-600",
      description: "Behind the scenes",
    },
    {
      name: "Discord",
      icon: MessageCircle,
      href: "https://discord.com",
      color: "from-indigo-500 to-purple-600",
      description: "Join my community",
    },
  ]

  return (
    <section id="social" className="min-h-screen py-20 px-4 md:px-8 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Find me on these platforms and let's build something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateZ: 2 }}
              whileTap={{ scale: 0.95 }}
              className="glass-strong rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all group relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity`}
              />

              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div
                  className={`p-4 glass rounded-2xl bg-gradient-to-br ${social.color} group-hover:scale-110 transition-transform`}
                >
                  <social.icon size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{social.name}</h3>
                  <p className="text-sm text-muted-foreground">{social.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
