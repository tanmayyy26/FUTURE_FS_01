import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { ScrollProgress } from "@/components/scroll-progress"
import { ScrollToTop } from "@/components/scroll-to-top"
import { NameSplash } from "@/components/name-splash"
import { StructuredData } from "@/components/structured-data"
import { Toaster } from "sonner"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { ClientBackground } from "@/components/client-background"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Tanmay Wagh - Full Stack Developer | Portfolio",
  description: "Full Stack Developer passionate about building scalable web applications. Explore my projects, skills, and professional experience.",
  generator: "v0.app",
  metadataBase: new URL("https://portfolio.tanmaywagh.com"),
  keywords: ["Full Stack Developer", "React", "Next.js", "Web Development", "Portfolio", "TypeScript", "Node.js"],
  authors: [{ name: "Tanmay Wagh" }],
  creator: "Tanmay Wagh",
  publisher: "Tanmay Wagh",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.tanmaywagh.com",
    siteName: "Tanmay Wagh - Portfolio",
    title: "Tanmay Wagh - Full Stack Developer",
    description: "Full Stack Developer passionate about building scalable web applications. Explore my projects, skills, and professional experience.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tanmay Wagh Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanmay Wagh - Full Stack Developer",
    description: "Full Stack Developer passionate about building scalable web applications.",
    creator: "@tanmaywagh",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body suppressHydrationWarning className={`theme-luke font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <NameSplash />
          <ScrollProgress />
          <ScrollToTop />
          <ClientBackground />
          <SmoothScrollProvider>
            <Suspense fallback={null}>
              <SiteHeader />
              {children}
              <Analytics />
              <Toaster />
            </Suspense>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
