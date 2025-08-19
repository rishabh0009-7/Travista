"use client"

import { MapPin, DollarSign, Gift } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const services = [
    {
      icon: MapPin,
      title: "Lots of Travel Places",
      description:
        "We provide a wide range of travel destinations around the world for your perfect vacation experience.",
    },
    {
      icon: DollarSign,
      title: "Cheap Travel Packages",
      description:
        "Get the best deals and affordable packages without compromising on quality and comfort during your trip.",
    },
    {
      icon: Gift,
      title: "Extra Bonuses",
      description:
        "Enjoy additional perks and special bonuses that make your travel experience even more memorable and exciting.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-900 mb-3 sm:mb-4">
            What Will You Get?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            We provide the best services to make your travel experience unforgettable and comfortable
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
                variants={itemVariants}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
                }}
              >
                <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
                  <motion.div
                    className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                    whileHover={{
                      rotate: 360,
                      transition: { duration: 0.8, ease: "easeInOut" },
                    }}
                  >
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-travista-primary" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-heading font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
