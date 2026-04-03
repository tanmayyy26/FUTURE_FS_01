"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Palette } from "lucide-react"

const THEME_VARIANTS = [
  { name: "luke", label: "Modern", colors: "bg-indigo-600" },
  { name: "ocean", label: "Ocean", colors: "bg-cyan-600" },
  { name: "sunset", label: "Sunset", colors: "bg-orange-600" },
  { name: "forest", label: "Forest", colors: "bg-emerald-600" },
]

export function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState("luke")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("portfolio-theme") || "luke"
    setCurrentTheme(savedTheme)
    applyTheme(savedTheme)
  }, [])

  const applyTheme = (themeName: string) => {
    const root = document.documentElement
    // Remove all theme classes
    root.classList.remove("theme-luke", "theme-ocean", "theme-sunset", "theme-forest")
    // Add the new theme class
    root.classList.add(`theme-${themeName}`)
  }

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme)
    localStorage.setItem("portfolio-theme", theme)
    applyTheme(theme)
  }

  if (!mounted) return null

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-40 p-3 rounded-full glass-strong hover:glow-accent transition-all hover:scale-110"
        aria-label="Open theme customizer"
      >
        <Palette className="h-5 w-5 text-accent" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-30"
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed bottom-20 left-8 z-40 glass-strong rounded-2xl p-4 backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-wider font-semibold text-accent mb-3">
                Theme
              </p>
              <div className="grid grid-cols-2 gap-2">
                {THEME_VARIANTS.map((variant) => (
                  <button
                    key={variant.name}
                    onClick={() => handleThemeChange(variant.name)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      currentTheme === variant.name
                        ? `${variant.colors} text-white ring-2 ring-offset-2 ring-offset-background`
                        : "bg-muted hover:bg-accent/20"
                    }`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
