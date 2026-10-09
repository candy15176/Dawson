import { StackedCards } from "../components/StackedCards"

export default function About() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1443 735"
        >
          <path d="M0 0H1443V735H0V0Z" fill="6BAEAE" />
        </svg>
      </div>

      {/* Content */}
      <div
        className="relative flex flex-col items-center pt-[161px] pb-16"
        style={{ backgroundColor: "#F5F0E8" }}
      >
        {/* About Us Title */}
        <div
          className="flex flex-col italic justify-center leading-[0] text-center mb-16"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "64px",
            color: "#6B8CAE",
          }}
        >
          <p className="leading-[normal] text-[#6baeae]">About Us</p>
        </div>

        <StackedCards />
      </div>
    </div>
  )
}
