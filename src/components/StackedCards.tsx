import { useState } from "react"
import { motion } from "motion/react"

const cardData = [
  {
    title: "Our Mission",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
  },
  {
    title: "Our Vision",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
  },
  {
    title: "Our Values",
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
  },
]

export function StackedCards() {
  const [isHovered, setIsHovered] = useState(false)

  // Rotation angles for the fan effect when stacked
  const stackedRotations = [-15, 0, 15]

  return (
    <div
      className="relative flex items-center justify-center min-h-[600px] w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full max-w-6xl flex justify-center items-center">
        {cardData.map((card, index) => {
          const spreadOffset = (index - 1) * 480

          return (
            <motion.div
              key={index}
              className="absolute w-[432px] bg-white rounded-[25px] shadow-2xl cursor-pointer"
              initial={false}
              animate={{
                x: isHovered ? spreadOffset : 0,
                rotate: isHovered ? 0 : stackedRotations[index],
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                mass: 1.2,
              }}
              style={{
                zIndex: isHovered ? index : 2 - index,
              }}
            >
              <div className="box-border content-stretch flex flex-col gap-[21px] items-center px-[10px] py-[27px]">
                {/* Divider line */}
                <div className="h-0 relative shrink-0 w-[432.005px]">
                  <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 432 1"
                    >
                      <line stroke="#6BAEAE" x2="432.005" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <div
                  className="flex flex-col justify-center leading-[0] relative shrink-0 text-center text-nowrap italic"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "40px",
                    color: "#3E593A",
                  }}
                >
                  <p className="leading-[normal] whitespace-pre text-[#6baeae]">
                    {card.title}
                  </p>
                </div>

                {/* Description */}
                <div
                  className="flex flex-col h-[245px] justify-center leading-[0] relative shrink-0 text-justify w-[383px] not-italic"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "24px",
                    color: "black",
                  }}
                >
                  <p className="leading-[normal]">{card.description}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
