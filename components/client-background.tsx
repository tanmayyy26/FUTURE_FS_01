"use client"

import dynamic from "next/dynamic"
import { useState, useEffect } from "react"

const ThreeBackground = dynamic(
  () => import("@/components/three-background").then((mod) => ({ default: mod.ThreeBackground })),
  {
    ssr: false,
    loading: () => null,
  }
)

export function ClientBackground() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Load Three.js background after splash animation completes
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 2900)

    return () => clearTimeout(timer)
  }, [])

  return isReady ? <ThreeBackground /> : null
}
