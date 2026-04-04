type Props = { size?: number; imageUrl?: string }

export function PortraitRing({ size = 280, imageUrl = "/images/home-portrait.jpeg" }: Props) {
  const d = size
  return (
    <div
      className="relative group"
      style={{
        width: d,
        height: d,
      }}
    >
      {/* Photo only with subtle glass border */}
      <div className="relative overflow-hidden rounded-full glass-light ring-1 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl || "/placeholder.svg"}
          alt="Profile portrait"
          width={d}
          height={d}
          className="block aspect-square object-cover"
          style={{ objectPosition: "center 20%" }}
          crossOrigin="anonymous"
        />
      </div>
    </div>
  )
}
