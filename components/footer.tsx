"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const footerLinks = {
    about: [
      { name: "About Us", href: "#" },
      { name: "Features", href: "#" },
      { name: "News", href: "#" },
      { name: "Menu", href: "#" },
    ],
    company: [
      { name: "Why Travista", href: "#" },
      { name: "Partner with Us", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Blog", href: "#" },
    ],
    support: [
      { name: "Account", href: "#" },
      { name: "Support Center", href: "#" },
      { name: "Feedback", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
    getInTouch: [
      { name: "Question or feedback?", href: "#" },
      { name: "We'd love to hear from you", href: "#" },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <footer className="bg-gray-900 text-white px-4 sm:px-6 py-12 sm:py-16" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Brand Section */}
          <motion.div className="sm:col-span-2 lg:col-span-1" variants={itemVariants}>
            <div className="space-y-4 text-center sm:text-left">
              <motion.div
                className="text-xl sm:text-2xl font-heading font-bold"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                Travista
              </motion.div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
                Travista helps you find your dream destination and creates unforgettable travel experiences around the
                world.
              </p>
              <div className="flex items-center justify-center sm:justify-start space-x-4">
                {[
                  { Icon: Facebook, href: "#" },
                  { Icon: Twitter, href: "#" },
                  { Icon: Instagram, href: "#" },
                  { Icon: Youtube, href: "#" },
                ].map(({ Icon, href }, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.2,
                      y: -2,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-travista-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* About */}
          <motion.div className="text-center sm:text-left" variants={itemVariants}>
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-base sm:text-lg">About</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.about.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm relative group inline-block"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-travista-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div className="text-center sm:text-left" variants={itemVariants}>
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-base sm:text-lg">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm relative group inline-block"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-travista-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div className="text-center sm:text-left" variants={itemVariants}>
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-base sm:text-lg">Support</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.support.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm relative group inline-block"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-travista-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Get in Touch */}
          <motion.div className="text-center sm:text-left" variants={itemVariants}>
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-base sm:text-lg">Get in Touch</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.getInTouch.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm relative group inline-block"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-travista-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © 2025 Travista. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 sm:space-x-6">
            {["Privacy Policy", "Terms of Service"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-all duration-300 text-xs sm:text-sm relative group"
                >
                  {item}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-travista-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
