import { ReactNode } from "react"

export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tanmay Wagh",
    url: "https://portfolio.tanmaywagh.com",
    email: "contact@tanmaywagh.com",
    jobTitle: "Full Stack Developer",
    image: "https://portfolio.tanmaywagh.com/images/profile.jpg",
    sameAs: [
      "https://github.com/tanmayyy26",
      "https://linkedin.com/in/tanmay-wagh",
      "https://twitter.com/tanmaywagh",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelancer",
    },
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Web Development",
      "Full Stack Development",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
