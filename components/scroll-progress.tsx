"use client"

import { useState, useEffect } from "react"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const scrolled = (window.scrollY / documentHeight) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="fixed inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary z-40 transform origin-left transition-transform duration-300"
      style={{ scaleX: scrollProgress / 100 }}
      aria-hidden="true"
    />
  )
}
