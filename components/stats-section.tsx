"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { number: "10", label1: "Years", label2: "Experience" },
    { number: "42", label1: "Destinations", label2: "Covered" },
    { number: "10K", label1: "Happy", label2: "Customer" },
  ]

  return (
    <section className="px-6 py-16 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">Where We Going</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-5xl lg:text-6xl font-heading font-bold text-travista-primary mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: index * 0.2 + 0.3,
                  duration: 0.8,
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-lg font-medium text-gray-900 mb-1">{stat.label1}</div>
              <div className="text-sm text-gray-600">{stat.label2}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
