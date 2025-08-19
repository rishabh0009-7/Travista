"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, MapPin, Search } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative px-4 sm:px-6 py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="space-y-4 sm:space-y-6">
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Feeling Bored and Wanna Take Some <span className="text-travista-primary">Vacation</span>{" "}
                <motion.span
                  className="inline-block"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 4, ease: "easeInOut" }}
                >
                  ✈︎
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                We provide what you need to enjoy your holiday with family. Time to make another memorable moments and
                experience the beauty of the world.
              </motion.p>
            </div>

            <motion.div
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.4, ease: "easeOut" },
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Location Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-travista-primary" />
                    Location
                  </label>
                  <Input
                    placeholder="Where are you going?"
                    className="border-gray-200 focus:border-travista-primary transition-all duration-300"
                  />
                </div>

                {/* Date Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-travista-primary" />
                    Date
                  </label>
                  <Input
                    type="date"
                    className="border-gray-200 focus:border-travista-primary transition-all duration-300"
                  />
                </div>

                {/* Search Button */}
                <div className="flex items-end">
                  <Button className="w-full bg-travista-primary hover:bg-travista-primary-dark text-white rounded-xl h-11 transition-all duration-500 hover:scale-105 hover:shadow-lg">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="text-center">
                <motion.div
                  className="text-xl sm:text-2xl font-heading font-bold text-gray-900"
                  whileHover={{ scale: 1.15, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                >
                  100+
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-600">Destinations</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-xl sm:text-2xl font-heading font-bold text-gray-900"
                  whileHover={{ scale: 1.15, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                >
                  2k+
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-600">Happy Customers</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            
            <div className="relative z-10 flex justify-center">
              <motion.div
                className="relative"
                animate={{
                  y: [0, -15, 0],
                  rotateY: [0, 5, 0, -5, 0],
                }}
                transition={{
                  y: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  rotateY: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              >
                <motion.img
                  src="/hero.jpg"
                  alt="Young traveler exploring beautiful mountain landscape"
                  className="w-72 h-80 sm:w-96 sm:h-[450px] lg:w-[420px] lg:h-[520px] object-cover rounded-3xl shadow-2xl"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 8,
                    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
                  }}
                  style={{
                    filter: "brightness(1.05) contrast(1.1) saturate(1.1)",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
