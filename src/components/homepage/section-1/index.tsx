"use client"

import NextImage from "@/components/NextImage"
import Television from "@/assets/homepage/televison.png"
import Thumbnail from "@/assets/homepage/thumbnail-1.png"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

export default function Section1() {

  const textSectionRef = useRef<HTMLDivElement>(null)
  const topRowRef = useRef<HTMLDivElement>(null)
  const bottomRowRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: textSectionRef,
    offset: ["start 300%", "end -150%"],
  })

  const xTop = useTransform(scrollYProgress, [1, 0], ["-100%", "100%"])
  const xBottom = useTransform(scrollYProgress, [0, 1], ["-100%", "80%"])

  return (
    <>
      <div className="relative bg-secondary pt-[286px] pb-[300px] overflow-hidden">
        <div className="absolute top-0 left-0 bg-[url(/images/section-bg.png)] bg-center w-full h-full" />
        <div className="absolute top-10 -left-10 flex items-center overflow-hidden rotate-[2.55deg]">
          <motion.div ref={topRowRef} style={{ x: xTop }} className="flex items-center overflow-scroll">
            <div className="py-5 pr-5 bg-[#070612]">
              <NextImage alt="thumbnail" src={Thumbnail} width={560} height={364} />
            </div>
            <div className="py-5 pr-5 bg-[#070612]">
              <NextImage alt="thumbnail" src={Thumbnail} width={560} height={364} />
            </div>
            <div className="py-5 pr-5 bg-[#070612]">
              <NextImage alt="thumbnail" src={Thumbnail} width={560} height={364} />
            </div>
            <div className="py-5 pr-5 bg-[#070612]">
              <NextImage alt="thumbnail" src={Thumbnail} width={560} height={364} />
            </div>
            <div className="py-5 pr-5 bg-[#070612]">
              <NextImage alt="thumbnail" src={Thumbnail} width={560} height={364} />
            </div>
            <div className="py-5 pr-5 bg-[#070612]">
              <NextImage alt="thumbnail" src={Thumbnail} width={560} height={364} />
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 -left-10 flex items-center overflow-hidden -rotate-[2.5deg] z-10">
          <motion.div ref={bottomRowRef} style={{ x: xBottom }} className="flex items-center overflow-hidden">
            <div className="py-5 pr-5 bg-[#070612]">
              <NextImage alt="thumbnail" src={Thumbnail} width={560} height={364} />
            </div>
            <div className="py-5 pr-5 bg-[#070612]">
              <NextImage alt="thumbnail" src={Thumbnail} width={560} height={364} />
            </div>
            <div className="py-5 pr-5 bg-[#070612]">
              <NextImage alt="thumbnail" src={Thumbnail} width={560} height={364} />
            </div>
            <div className="py-5 pr-5 bg-[#070612]">
              <NextImage alt="thumbnail" src={Thumbnail} width={560} height={364} />
            </div>
            <div className="py-5 pr-5 bg-[#070612]">
              <NextImage alt="thumbnail" src={Thumbnail} width={560} height={364} />
            </div>
            <div className="py-5 pr-5 bg-[#070612]">
              <NextImage alt="thumbnail" src={Thumbnail} width={560} height={364} />
            </div>
          </motion.div>
        </div>

        <div ref={textSectionRef} className="h-[1129px] flex items-center justify-center flex-col">
          <h2 className="text-center text-primary-foreground font-semibold text-5xl">
            What is <span className="font-dela-gothic-one text-[80px] leading-[120%] text-primary">aicademy ?</span>
          </h2>
          <div className="mt-[52px] flex items-center justify-center flex-col gap-7 text-primary-foreground text-[40px] font-semibold leading-[140%] text-center">
            <p>
              aicademy is an{" "}
              <span className="bg-[#F9F871] py-2.5 px-4 drop-shadow-[0px_8px_0px_rgba(152,151,36,1)] rounded-[60px]">
                interactive
              </span>{" "}
              &{" "}
              <span className="bg-[#FF8A44] py-2.5 px-4 text-white drop-shadow-[0px_8px_0px_rgba(176,83,26,1)] rounded-[60px]">
                AI-powered learning platform
              </span>
            </p>
            <div className="inline-flex justify-center gap-2">
              that combines
              <div className="inline-flex items-center justify-center gap-[7px]">
                <div className="w-7 h-7 rounded-full bg-[#1AADB5]/30" />
                <div className="w-7 h-7 rounded-full bg-[#1AADB5]/50" />
                <div className="w-7 h-7 rounded-full bg-[#1AADB5]" />
              </div>{" "}
              gamified education
            </div>
            <p>
              with{" "}
              <span className="bg-[#0F0F0E] text-white py-2.5 px-4 drop-shadow-[0px_8px_0px_rgba(78,78,70,1)] rounded-[60px]">
                real-time AI mentorship
              </span>
            </p>
            <p>We make AI accessible, effective, and inspiring for everyone!</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-[920px] flex items-center justify-center gap-[103px]">
        <NextImage alt="televison" src={Television} width={728} height={507} />
        <div className="flex flex-col gap-10 text-primary-foreground">
          <h2 className="font-dela-gothic-one text-[40px] leading-[120%] tracking-[1%] w-[330px]">
            24/7 AI mentorship{" "}
          </h2>
          <p className="text-2xl tracking-[1%] w-[452px]">
            Summon your AI Mentor for instant, context-aware guidance anytime.
          </p>
        </div>
      </div>
    </>
  )
}

