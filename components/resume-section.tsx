"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { staggerFadeIn } from "@/lib/animations"

const tabs = ["Skills", "Hackathon Certificates", "Certificates", "About me"] as const
type Tab = (typeof tabs)[number]

export function ResumeSection() {
  const [active, setActive] = useState<Tab>("Skills")
  const tabsRef = useRef<HTMLButtonElement[]>([])

  useEffect(() => {
    staggerFadeIn(tabsRef.current, 0.2)
  }, [])

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div>
        <div className="mt-8 grid gap-3 max-w-xs">
          {tabs.map((t, index) => (
            <button
              key={t}
              ref={(el) => { if (el) tabsRef.current[index] = el }}
              onClick={() => setActive(t)}
              aria-pressed={active === t}
              className={cn(
                "w-full rounded-md px-4 py-3 text-left font-medium transition-colors border",
                active === t
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-secondary text-foreground/90 border-border hover:bg-secondary/80",
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div>
        {active === "Hackathon Certificates" && <HackathonCertificatesGrid />}
        {active === "Skills" && <SkillsGrid />}
        {active === "Certificates" && <CertificatesGrid />}
        {active === "About me" && <AboutMeGrid />}
      </div>
    </div>
  )
}

function Card({
  title,
  subtitle,
  accent,
}: {
  title: string
  subtitle?: string
  accent?: "left" | "none"
}) {
  return (
    <div className={cn("rounded-xl border border-border/60 bg-secondary/40 p-5", accent === "left" && "relative pl-6")}>
      {accent === "left" && (
        <span className="absolute left-0 top-0 h-full w-[4px] bg-primary rounded-l-xl" aria-hidden />
      )}
      <h4 className="text-lg font-semibold">{title}</h4>
      {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
    </div>
  )
}


function HackathonCertificatesGrid() {
  const certificates = [
    {
      title: "Top 10 in TechhXion 2.0",
      issuer: "Tulsiramji Gaikwad-Patil College of Engineering and Technology",
      date: "March 2026",
      code: "TECHXION-TOP10",
      pdfUrl: "/images/certificates/TGPCET.pdf",
      icon: "🏆",
    },
    {
      title: "Top 10 in Enkryptia Hackathon",
      issuer: "Government Polytechnic Nagpur",
      date: "February 2026",
      code: "ENKRYPTIA-TOP10",
      pdfUrl: "/images/certificates/GPN.pdf",
      icon: "🏆",
    },
  ]

  return (
    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
      {certificates.map((cert) => (
        <div
          key={cert.code}
          className="group rounded-xl border border-border/60 bg-secondary/40 overflow-hidden hover:border-primary/60 transition-all hover:shadow-lg"
        >
          <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
            <span className="text-8xl" aria-hidden="true">{cert.icon}</span>
          </div>
          <div className="p-5">
            <h4 className="text-lg font-semibold leading-snug">{cert.title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              <span className="font-medium text-primary">{cert.issuer}</span> · {cert.date}
            </p>
            <p className="mt-2 text-xs text-muted-foreground/80">Certificate: {cert.code}</p>
            <a
              href={cert.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              View Certificate
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

function SkillsGrid() {
  const items = [
    { name: "HTML 5", image: "/images/skills/html5.svg" },
    { name: "CSS 3", image: "/images/skills/css3.svg" },
    { name: "JavaScript", image: "/images/skills/javascript.svg" },
    { name: "React", image: "/images/skills/react.svg" },
    { name: "Next.js", image: "/images/skills/nextjs.svg" },
    { name: "Tailwind CSS", image: "/images/skills/tailwind.svg" },
    { name: "Node.js", image: "/images/skills/nodejs.svg" },
    { name: "Figma", image: "/images/skills/figma.svg" },
  ]
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {items.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center justify-center gap-3 p-6 w-full min-w-[200px] transition-all cursor-pointer hover:scale-105"
        >
          <span className="text-2xl font-bold text-foreground text-center">{skill.name}</span>
          <img
            src={skill.image}
            alt={skill.name}
            className="w-20 h-20 transition-transform"
          />
        </div>
      ))}
    </div>
  )
}

function CertificatesGrid() {
  const certificates = [
    {
      title: "Introduction to Generative AI Studio",
      issuer: "Google Cloud",
      date: "November 2025",
      code: "9381842",
      pdfUrl: "/images/certificates/google-cloud-ai.pdf",
      icon: "☁️",
    },
    {
      title: "Introduction to MS Excel",
      issuer: "Microsoft",
      date: "November 2025",
      code: "9385221",
      pdfUrl: "/images/certificates/microsoft-excel.pdf",
      icon: "📊",
    },
    {
      title: "Cyber Job Simulation",
      issuer: "Deloitte",
      date: "November 2025",
      code: "gse2jLWoAFKMogk",
      pdfUrl: "/images/certificates/deloitte-cyber.pdf",
      icon: "🔒",
    },
    {
      title: "Completion Certificate: Forage Virtual Experience",
      issuer: "The Forage",
      date: "December 2025",
      code: "Forage-9PBTqmSxAf6zZTseP",
      pdfUrl: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_69148a51652eccc119b475f8_1765220902623_completion_certificate.pdf",
      icon: "🎓",
    },
  ]

  return (
    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
      {certificates.map((cert) => (
        <div
          key={cert.code}
          className="group rounded-xl border border-border/60 bg-secondary/40 overflow-hidden hover:border-primary/60 transition-all hover:shadow-lg"
        >
          <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
            <span className="text-8xl" aria-hidden="true">{cert.icon}</span>
          </div>
          <div className="p-5">
            <h4 className="text-lg font-semibold leading-snug">{cert.title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              <span className="font-medium text-primary">{cert.issuer}</span> · {cert.date}
            </p>
            <p className="mt-2 text-xs text-muted-foreground/80">Certificate: {cert.code}</p>
            <a
              href={cert.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              View Certificate
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

function AboutMeGrid() {
  const rows = [
    ["Name", "Tanmay Wagh"],
    ["Experience", "2 Years"],
    ["Nationality", "Indian"],
    ["Freelance", "Available"],
    ["Phone", "8446250270"],
    ["Email", "2work@603@gmail.com"],
    ["Languages", "English, Hindi, Marathi"],
  ]
  return (
    <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
      {rows.map(([label, value]) => (
        <div key={label}>
          <dt className="text-sm text-muted-foreground">{label}</dt>
          <dd className="text-base font-medium">{value}</dd>
        </div>
      ))}
    </dl>
  )
}
