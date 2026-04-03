"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function NameSplash() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Animation ends and splash disappears
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2800) // Reduced from 3.2 to 2.8 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background pointer-events-auto"
    >
      {/* Subtle backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"
      />

      {/* Large Tanmay Text - Shrink and move to top-left */}
      <motion.div
        initial={{
          fontSize: "8rem",
          opacity: 1,
          x: 0,
          y: 0,
        }}
        animate={{
          fontSize: "1.5rem",
          x: -320,
          y: -400,
          opacity: 0,
        }}
        transition={{
          delay: 0.3,
          duration: 1.8,
          ease: "easeInOut",
        }}
        className="relative z-10 font-bold tracking-tight will-change-transform"
        style={{
          WebkitFontSmoothing: "antialiased",
          textRendering: "geometricPrecision",
        }}
      >
        <span className="gradient-text">Tanmay</span>
      </motion.div>

      {/* Welcome text - simple fade in/out */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="absolute bottom-24 text-center text-muted-foreground pointer-events-none"
      >
        <p className="text-xs font-medium tracking-wide">WELCOME TO MY PORTFOLIO</p>
      </motion.div>
    </motion.div>
  )
}
