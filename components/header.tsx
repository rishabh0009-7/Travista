"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center"
          whileHover={{
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
        >
          {/* <Image
            src="/logo2.png"
            alt="Travista logo"
            width={40}
            height={40}
            className="h-8 w-auto sm:h-9 mr-2 sm:mr-3 drop-shadow-sm"
            priority
          /> */}
          <div className="text-xl sm:text-2xl font-heading font-bold text-gray-900">
            Travista
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {["Home", "About", "Pricing", "Contact"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1 + 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Link
                href="#"
                className="text-gray-700 hover:text-travista-primary transition-all duration-300 relative group text-sm lg:text-base"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-travista-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 text-gray-700 hover:text-travista-primary transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </motion.button>

        {/* Desktop Auth Buttons */}
        <motion.div
          className="hidden md:flex items-center space-x-3 lg:space-x-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <Button
            variant="ghost"
            className="text-gray-700 hover:text-travista-primary transition-all duration-300 text-sm lg:text-base hover:bg-gray-50"
          >
            Login
          </Button>
          <Button className="bg-travista-primary hover:bg-travista-primary-dark text-white px-4 lg:px-6 py-2 rounded-full transition-all duration-400 hover:scale-105 hover:shadow-lg text-sm lg:text-base">
            Sign Up
          </Button>
        </motion.div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial={false}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="py-4 space-y-4 border-t border-gray-100 mt-3">
          {["Home", "About", "Pricing", "Contact"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={
                isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href="#"
                className="block text-gray-700 hover:text-travista-primary transition-colors duration-300 py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            </motion.div>
          ))}
          <motion.div
            className="flex flex-col space-y-3 pt-4 border-t border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-travista-primary transition-colors duration-300 justify-start"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Button>
            <Button
              className="bg-travista-primary hover:bg-travista-primary-dark text-white rounded-full transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
}
