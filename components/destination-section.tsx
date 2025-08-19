"use client"

import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function DestinationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const destinations = [
    {
      id: 1,
      name: "Get Ready to Explore",
      location: "Indonesia",
      price: 120,
      image: "/indonesia.png",
      rating: 5,
      reviews: 234,
    },
    {
      id: 2,
      name: "Best Lake Trip You",
      location: "Canada",
      price: 320,
      image: "/canada.png",
      rating: 5,
      reviews: 189,
    },
    {
      id: 3,
      name: "Let's See The Landmark In",
      location: "Paris",
      price: 450,
      image: "/paris.png",
      rating: 4,
      reviews: 312,
    },
    {
      id: 4,
      name: "Get Ready to Explore",
      location: "Switzerland",
      price: 380,
      image: "/switzerland.png",
      rating: 5,
      reviews: 156,
    },
    {
      id: 5,
      name: "Get Ready to Explore",
      location: "Norway",
      price: 290,
      image: "/norway.png",
      rating: 5,
      reviews: 203,
    },
  ]

  const scrollLeft = () => {
    const container = document.getElementById("destinations-scroll")
    if (container) {
      container.scrollBy({ left: -320, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    const container = document.getElementById("destinations-scroll")
    if (container) {
      container.scrollBy({ left: 320, behavior: "smooth" })
    }
  }

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-900 mb-2">
              Top Destination
            </h2>
            <p className="text-base sm:text-lg text-gray-600">Explore the most beautiful places around the world</p>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              className="rounded-full border-gray-200 hover:bg-travista-primary hover:text-white hover:border-travista-primary transition-all duration-400 bg-transparent hover:scale-110"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              className="rounded-full border-gray-200 hover:bg-travista-primary hover:text-white hover:border-travista-primary transition-all duration-400 bg-transparent hover:scale-110"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          id="destinations-scroll"
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 snap-x snap-mandatory"
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              className="flex-none w-72 sm:w-80 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer snap-start"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.9 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{
                y: -15,
                scale: 1.02,
                transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
              }}
            >
              {/* Image Container */}
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <motion.img
                  src={destination.image || "/placeholder.svg"}
                  alt={`${destination.name} in ${destination.location}`}
                  className="w-full h-full object-cover"
                  whileHover={{
                    scale: 1.15,
                    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
                  }}
                />
                <motion.div
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white rounded-full px-2.5 sm:px-3 py-1 shadow-sm"
                  whileHover={{
                    scale: 1.15,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                >
                  <span className="text-sm font-semibold text-travista-primary">${destination.price}</span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-heading font-semibold text-gray-900 leading-tight">
                    {destination.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{destination.location}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 + 0.8, duration: 0.4, ease: "easeOut" }}
                        >
                          <Star
                            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                              i < destination.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        </motion.div>
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600">({destination.reviews})</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-6 lg:hidden">
          <div className="flex gap-2">
            {destinations.map((_, index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-gray-300 rounded-full"
                whileHover={{ scale: 1.5, backgroundColor: "#8B5CF6" }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
