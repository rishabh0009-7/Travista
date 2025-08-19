"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const [counters, setCounters] = useState({
    years: 0,
    destinations: 0,
    customers: 0,
  });

  useEffect(() => {
    if (isInView) {
      const animateCounter = (target: number, key: keyof typeof counters) => {
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }, 16);
      };

      setTimeout(() => {
        animateCounter(10, "years");
        animateCounter(42, "destinations");
        animateCounter(10000, "customers");
      }, 800);
    }
  }, [isInView]);

  return (
    <section
      className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20 bg-white"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Left Content - Family Image */}
          <motion.div
            className="relative flex justify-center order-1 lg:order-1"
            initial={{ opacity: 0, x: -60, scale: 0.9 }}
            animate={
              isInView
                ? { opacity: 1, x: 0, scale: 1 }
                : { opacity: 0, x: -60, scale: 0.9 }
            }
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Family Vacation Image */}
            <div className="relative z-10">
              <motion.img
                src="/experience.jpg"
                alt="Happy family enjoying vacation at tropical resort"
                className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
                }}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-2 relative z-20"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{
              duration: 1,
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="space-y-3 sm:space-y-4">
              <motion.div
                className="text-xs sm:text-sm font-medium text-travista-primary uppercase tracking-wide relative z-30"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.8,
                  delay: 1.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                Our Experience
              </motion.div>
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-900 leading-tight relative z-30"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.8,
                  delay: 1.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                We Will Make You Happy With Our Trip
              </motion.h2>
            </div>

            <motion.div
              className="grid grid-cols-3 gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.8,
                delay: 1.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="text-center">
                <motion.div
                  className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-travista-primary mb-1"
                  whileHover={{
                    scale: 1.15,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                >
                  {counters.years}
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-travista-primary mb-1"
                  whileHover={{
                    scale: 1.15,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                >
                  {counters.destinations}
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Destinations
                </div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-travista-primary mb-1"
                  whileHover={{
                    scale: 1.15,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                >
                  {counters.customers > 1000
                    ? `${Math.floor(counters.customers / 1000)}K`
                    : counters.customers}
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Happy Customer
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white relative z-50"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 60, scale: 0.95 }
          }
          transition={{
            duration: 1,
            delay: 1.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.4, ease: "easeOut" },
          }}
        >
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <motion.h3
              className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-heading font-bold leading-tight relative z-50"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.8,
                delay: 2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              Prepare Yourself & Let&apos;s Explore The Beauty Of The World
            </motion.h3>
            <motion.p
              className="text-sm sm:text-base lg:text-lg text-indigo-100 leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.8,
                delay: 2.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              We have many special offers especially for you. Get ready to
              explore the world with us and create unforgettable memories.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.8,
                delay: 2.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Button className="bg-white text-travista-primary hover:bg-gray-100 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg transition-all duration-500 hover:scale-110 hover:shadow-lg">
                Get Started Now
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
