"use client"

import {motion, useInView,useScroll, useTransform, AnimatePresence} from "framer-motion"
import {useEffect, useRef, useState} from "react"

import NextImage from "@/components/NextImage"

import Rabbit from "@/assets/homepage/rabbit-1.png";
import Thumbnail from "@/assets/homepage/thumbnail-1.png";

export default function Section1() {
  const bgRef = useRef(null);
  const textRef = useRef(null);
  const textSectionRef = useRef<HTMLDivElement>(null)
  const topRowRef = useRef<HTMLDivElement>(null)
  const bottomRowRef = useRef<HTMLDivElement>(null)
  const [showMenuDialog, setShowMenuDialog] = useState(false)
  const [showChatDialog, setShowChatDialog] = useState(false)

  const { scrollYProgress } = useScroll({
    target: textSectionRef,
    offset: ["start 300%", "end -150%"],
  })

  const xTop = useTransform(scrollYProgress, [1, 0], ["-100%", "100%"])
  const xBottom = useTransform(scrollYProgress, [0, 1], ["-100%", "80%"])
  
  const isInView = useInView(bgRef, { margin: "0px" });
  const isTextInView = useInView(textRef, { margin: "0px" });
  
  useEffect(() => {
    if (isTextInView && !showChatDialog) {
      const menuTimer = setTimeout(() => {
        setShowMenuDialog(true)
        setShowChatDialog(false)
      }, 3000)
      
      const chatTimer = setTimeout(() => {
        setShowMenuDialog(false)
        setShowChatDialog(true)
      }, 5000)
      
      return () => {
        clearTimeout(menuTimer)
        clearTimeout(chatTimer)
        setShowChatDialog(false)
      }
    }
  }, [isTextInView])
  
  const dialogVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  }
  
  return (
    <>
      <div className="relative bg-secondary xl:pt-[286px] xl:pb-[300px] overflow-hidden [clip-path:polygon(0%_0%,100%_0%, 100%_100%)]" >
        <div className="absolute top-0 left-0 bg-[url(/images/section-bg.png)] bg-center w-full h-full" />
        <div className="absolute top-10 -left-10 flex items-center overflow-hidden rotate-[2.55deg]">
          <motion.div ref={topRowRef} style={{ x: xTop }} className="flex items-center overflow-scroll">
            {
              [1, 2, 3, 4, 5, 6].map(ele => (
                <div key={ele} className="py-[5px] pr-[5px] md:py-2.5 md:pr-2.5 xl:py-5 xl:pr-5 bg-[#070612]">
                  <div className="w-[154px] h-[109px] md:w-[282px] md:h-[200px] xl:w-[560px] xl:h-[364px]">
                    <img alt="thumbnail" src={Thumbnail.src} className="w-full h-full"/>
                  </div>
                </div>
              ))
            }
          </motion.div>
        </div>
        <div className="absolute bottom-0 -left-10 flex items-center overflow-hidden -rotate-[2.5deg] z-10">
          <motion.div ref={bottomRowRef} style={{x: xBottom}} className="flex items-center overflow-hidden">
            {
              [1, 2, 3, 4, 5, 6].map(ele => (
                <div key={ele} className="py-[5px] pr-[5px] md:py-2.5 md:pr-2.5 xl:py-5 xl:pr-5 bg-[#070612]">
                  <div className="w-[154px] h-[109px] md:w-[282px] md:h-[200px] xl:w-[560px] xl:h-[364px]">
                    <img alt="thumbnail" src={Thumbnail.src} className="w-full h-full"/>
                  </div>
                </div>
              ))
            }
          </motion.div>
        </div>
        
        <div ref={textSectionRef} className="h-[800px] md:h-[1000px] lg:h-[1129px] flex items-center justify-center flex-col">
          <h2 className="text-center text-primary-foreground font-semibold text-sm md:text-2xl xl:text-5xl">
            What is <span
            className="font-dela-gothic-one text-[36px] md:text-[60px] lg:text-[80px] leading-[120%] text-primary">aicademy ?</span>
          </h2>
          <div ref={bgRef}
               className="mt-[52px] flex items-center justify-center flex-col gap-7 text-primary-foreground text-sm md:text-2xl xl:text-[40px] font-semibold !leading-[140%] text-center">
            <div className="flex items-center justify-center flex-wrap gap-3">
              <span className="">aicademy is an </span>
              <div className="flex items-center justify-center flex-wrap gap-2">
                <div className="relative py-2.5 px-4">
                  <motion.div
                    initial={{width: 0}}
                    animate={isInView ? {width: "100%"} : {width: 0}}
                    transition={{duration: 1, ease: "easeInOut"}}
                    className="absolute inset-0 bg-[#F9F871] rounded-[60px] drop-shadow-[0px_2px_0px_rgba(152,151,36,1)] md:drop-shadow-[0px_4px_0px_rgba(152,151,36,1)] xl:drop-shadow-[0px_8px_0px_rgba(152,151,36,1)]"
                  />
                  
                  <p className="relative">interactive</p>
                </div>
                
                <span> & </span>
                <div className="relative py-2.5 px-4">
                  <motion.div
                    initial={{width: 0}}
                    animate={isInView ? {width: "100%"} : {width: 0}}
                    transition={{duration: 1, ease: "easeInOut"}}
                    className="absolute inset-0 bg-[#FF8A44] rounded-[60px] drop-shadow-[0px_2px_0px_rgba(176,83,26,1)] md:drop-shadow-[0px_4px_0px_rgba(176,83,26,1)] xl:drop-shadow-[0px_8px_0px_rgba(176,83,26,1)]"
                  />
                  
                  <p className="relative text-white">AI-powered learning platform</p>
                </div>
              </div>
            </div>
            <div className="inline-flex justify-center gap-2">
              that combines
              <div className="inline-flex items-center justify-center gap-[7px]">
                <div className="w-2.5 h-2.5 md:w-5 md:h-5 lg:w-7 lg:h-7 rounded-full bg-[#1AADB5] animate-dot1"/>
                <div className="w-2.5 h-2.5 md:w-5 md:h-5 lg:w-7 lg:h-7 rounded-full bg-[#1AADB5] animate-dot2"/>
                <div className="w-2.5 h-2.5 md:w-5 md:h-5 lg:w-7 lg:h-7 rounded-full bg-[#1AADB5] animate-dot3"/>
              </div>{" "}
              gamified education
            </div>
            <div className="flex items-center gap-3">
              with{" "}
              <div className="relative py-2.5 px-4">
                <motion.div
                  initial={{width: 0}}
                  animate={isInView ? {width: "100%"} : {width: 0}}
                  transition={{duration: 1, ease: "easeInOut"}}
                  className="absolute inset-0 bg-[#0F0F0E] rounded-[60px] drop-shadow-[0px_2px_0px_rgba(78,78,70,1)] md:drop-shadow-[0px_4px_0px_rgba(78,78,70,1)] xl:drop-shadow-[0px_8px_0px_rgba(78,78,70,1)]"
                />
                
                <p className="relative text-white">real-time AI mentorship</p>
              </div>
            </div>
            <p>We make AI accessible, effective, and inspiring for everyone!</p>
          </div>
        </div>
      </div>
      <div className="bg-white flex items-center justify-center gap-2.5 md:gap-10 xl:gap-[103px] flex-col-reverse xl:flex-row py-10 px-5 xl:py-[146px]">
        <div className="relative w-full max-w-[728px] aspect-[728/507]">
          <div
            className="absolute inset-0 bg-[url(/svg/border-frame.svg)] w-full h-full bg-center bg-no-repeat bg-contain inline-flex items-center justify-center">
            <div className="p-6 w-full h-full flex items-center justify-center">
              <div className="text-black text-xs sm:text-[22px] sm:leading-8 w-[262px] sm:w-[400px] xl:w-[556.36px]">
                Learning knows no limits with aicademy. Our AI Mentor is available 24/7, offering instant, context-aware
                support—whether you need clarity, feedback, or help crafting the perfect {" "}
                <span ref={textRef} className="relative">
              <motion.span
                initial={{width: 0}}
                animate={isTextInView ? {width: "100%"} : {width: 0}}
                transition={{duration: 1, ease: "easeInOut"}}
                className="absolute inset-0 bg-[#BFDDFD]"
              />
            <span className="relative underline font-semibold">AI prompt</span>
            <AnimatePresence mode="wait">
              {showMenuDialog && (
                <motion.span key="menuDialog" variants={dialogVariants} initial="hidden" animate="visible" exit="exit">
                  <MenuDialog />
                </motion.span>
              )}
            </AnimatePresence>
            </span>
                . Stay on track and never feel stuck!
              </div>
            </div>
          </div>
          
          
          <AnimatePresence mode="wait">
            {showChatDialog && (
              <motion.div key="chatDialog" variants={dialogVariants} initial="hidden" animate="visible" exit="exit">
                <ChatBotDialog />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div
          className="flex flex-col items-center xl:items-start justify-center text-center xl:text-left gap-2.5 md:gap-5 xl:gap-10 text-primary-foreground ">
          <h2 className="font-dela-gothic-one text-[32px] md:text-[36px] xl:text-[40px] leading-[120%] tracking-[1%] w-[330px]">
            24/7 AI mentorship{" "}
          </h2>
          <p className="text-sm md:text-base xl:text-2xl tracking-[1%] w-[335px] xl:w-[452px]">
            Summon your AI Mentor for instant, context-aware guidance anytime.
          </p>
        </div>
      </div>
    </>
  )
}

function MenuDialog() {
  return (
    <div className="absolute -bottom-[70px] -right-[150px] xl:-bottom-[100px] translate-y-1/2 xl:-right-52 bg-[#D7E5E9] rounded-xl px-2 py-1.5 xl:py-[10px] xl:px-3 w-[127px] md:w-[150px] xl:w-[184px] h-auto">
    <div className="flex flex-col">
      <div
        className="bg-[#1AADB5] p-[5px] xl:p-2 flex items-center justify-between text-[10px] md:text-xs xl:text-sm leading-[120%] rounded text-white">
        Explain
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-3 h-3 md:w-3.5 md:h-3.5 xl:w-4 xl:h-4">
          <g clipPath="url(#clip0_15892_18507)">
            <path
              d="M1 8.00009C1 6.14358 1.7375 4.3631 3.05025 3.05034C4.36301 1.73759 6.14348 1.00009 8 1.00009C9.85652 1.00009 11.637 1.73759 12.9497 3.05034C14.2625 4.3631 15 6.14358 15 8.00009V12.4538C15 13.1958 15 13.5651 14.8898 13.8617C14.8021 14.0968 14.6649 14.3102 14.4875 14.4876C14.3101 14.665 14.0967 14.8022 13.8616 14.8898C13.565 15.0001 13.1949 15.0001 12.4538 15.0001H8C6.14348 15.0001 4.36301 14.2626 3.05025 12.9498C1.7375 11.6371 1 9.85661 1 8.00009Z"
              stroke="white" strokeWidth="1.75"/>
            <path d="M5.375 7.12497H10.625M8 10.625H10.625" stroke="white" strokeWidth="1.75"
                  strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_15892_18507">
              <rect width="16" height="16" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div
        className="p-[5px] xl:p-2 flex items-center justify-between text-[10px] md:text-xs xl:text-sm leading-[120%] rounded">
        Give Examples
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-3 h-3 md:w-3.5 md:h-3.5 xl:w-4 xl:h-4">
          <path
            d="M3.4065 1.203L2.7025 1.906L3.75 2.953L4.453 2.25L3.4065 1.203ZM12.594 1.203L11.5465 2.25L12.25 2.953L13.297 1.9065L12.594 1.203ZM8 1.515C7.835 1.51634 7.66833 1.527 7.5 1.547H7.485C5.457 1.7795 3.843 3.418 3.5625 5.437C3.3385 7.062 4.0085 8.5355 5.125 9.4845C5.58164 9.87433 5.89054 10.4092 6 10.9995V13.9995H7.14C7.314 14.298 7.6315 14.4995 8 14.4995C8.3685 14.4995 8.686 14.298 8.86 13.9995H10V11.9995H10.047V11.4055C10.047 10.6725 10.428 9.9335 11.047 9.359C11.875 8.53 12.5 7.3525 12.5 6C12.5 3.53 10.467 1.492 8 1.515ZM8 2.515C9.9325 2.488 11.5 4.07 11.5 6C11.5 7.047 11.015 7.969 10.3435 8.64L10.3595 8.656C9.69246 9.27156 9.26101 10.1005 9.1395 11H6.9525C6.8425 10.143 6.475 9.3135 5.7805 8.7185C4.897 7.9685 4.3705 6.8385 4.5465 5.5625C4.765 3.9875 6.043 2.721 7.609 2.5475C7.7383 2.52957 7.86851 2.51889 7.999 2.5155L8 2.515ZM1 6V7H2.5V6H1ZM13.5 6V7H15V6H13.5ZM3.75 10.047L2.703 11.0935L3.4065 11.797L4.4525 10.75L3.75 10.047ZM12.25 10.047L11.547 10.75L12.5935 11.797L13.297 11.0935L12.25 10.047ZM7 12H9V13H7V12Z"
            fill="black"/>
        </svg>
      </div>
      <div
        className="p-[5px] xl:p-2 flex items-center justify-between text-[10px] md:text-xs xl:text-sm leading-[120%] rounded">
        Translate
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-3 h-3 md:w-3.5 md:h-3.5 xl:w-4 xl:h-4">
          <path
            d="M7.93268 14.6667L10.966 6.66668H12.366L15.3993 14.6667H13.9993L13.2827 12.6333H10.0493L9.33268 14.6667H7.93268ZM2.66602 12.6667L1.73268 11.7333L5.09935 8.36668C4.71046 7.97779 4.35757 7.53334 4.04068 7.03334C3.72379 6.53334 3.43224 5.96668 3.16602 5.33334H4.56602C4.78824 5.76668 5.01046 6.14445 5.23268 6.46668C5.4549 6.7889 5.72157 7.11112 6.03268 7.43334C6.39935 7.06668 6.78002 6.55268 7.17468 5.89134C7.56935 5.23001 7.86646 4.59957 8.06602 4.00001H0.666016V2.66668H5.33268V1.33334H6.66602V2.66668H11.3327V4.00001H9.39935C9.16602 4.80001 8.81602 5.62223 8.34935 6.46668C7.88268 7.31112 7.42157 7.95557 6.96602 8.40001L8.56602 10.0333L8.06602 11.4L6.03268 9.31668L2.66602 12.6667ZM10.466 11.4667H12.866L11.666 8.06668L10.466 11.4667Z"
            fill="black"/>
        </svg>
      </div>
      <div
        className="p-[5px] xl:p-2 flex items-center justify-between text-[10px] md:text-xs xl:text-sm leading-[120%] rounded">
        Highlight
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-3 h-3 md:w-3.5 md:h-3.5 xl:w-4 xl:h-4">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M14.6667 13.3333L13.3333 14.6667H4.66666L6 13.3333H14.6667ZM10.8227 1.40491L14.594 5.17616L14.0303 5.90269L13.013 7.19956L12.4162 7.94847L11.8845 8.60478L11.5284 9.03631L11.1107 9.53066L10.8402 9.84066L10.6062 10.0986L10.4089 10.3045L9.94044 10.7679L8.97644 11.7459L8.46787 12.2691L8.28428 12.2601L8.092 12.2571C7.76429 12.2571 7.40029 12.2826 7 12.3333L6.74906 12.3686L6.50387 12.4089L6.26928 12.4524L5.94797 12.5186L5.33334 12.6667L3.33334 13.6667L2 14L2.33334 12.6667L3.33334 10.6667L3.36494 10.5915L3.42084 10.4373L3.46772 10.2887L3.51881 10.1036C3.57094 9.90047 3.62478 9.64322 3.66666 9.33334C3.74576 8.74801 3.77482 8.15526 3.75384 7.55509L3.85713 7.43878L3.96256 7.32656L4.45434 6.82331L5.63728 5.64756L6.00187 5.29769L6.40731 4.92641L6.76103 4.61397L7.14091 4.28781L7.54688 3.94797L7.979 3.59441L8.43725 3.22716L9.17362 2.65059L9.69719 2.24903L10.2469 1.83384L10.8227 1.40491ZM5.07031 8.67978C5.06116 8.82499 5.04932 8.97002 5.03478 9.11478L4.98803 9.51191C4.95691 9.74222 4.91947 9.95613 4.87709 10.154L4.74341 10.7202L5.32613 11.2553L5.90144 11.166C6.21897 11.1018 6.53131 11.0488 6.83228 11.0106C7.0034 10.9888 7.17497 10.9707 7.34688 10.9563L5.07031 8.67978ZM10.6967 3.16466L10.5086 3.30709L9.74594 3.89422L9.27112 4.26756L8.82334 4.62634L8.40275 4.97038L8.0095 5.29944L7.64375 5.61328L7.30575 5.91159L6.89219 6.29066L6.57725 6.59322L5.72062 7.44447L8.55175 10.2756L8.72612 10.098L9.31919 9.50616L9.44625 9.38206L9.61856 9.203L9.83559 8.964L10.0923 8.67009L10.5 8.18772L10.8485 7.7655L11.3735 7.11747L11.964 6.37663L12.8187 5.28666L10.6967 3.16466Z"
                fill="black"/>
        </svg>
      </div>
      <div
        className="p-[5px] xl:p-2 flex items-center justify-between text-[10px] md:text-xs xl:text-sm leading-[120%] rounded">
        Bookmark
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16"
             height="16" viewBox="0 0 16 16" fill="none" className="w-3 h-3 md:w-3.5 md:h-3.5 xl:w-4 xl:h-4">
          <rect width="16" height="16" fill="url(#pattern0_15892_18526)"/>
          <defs>
            <pattern id="pattern0_15892_18526" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0_15892_18526" transform="scale(0.00195312)"/>
            </pattern>
            <image id="image0_15892_18526" width="512" height="512" preserveAspectRatio="none"
                   xlinkHref="data:image/png;base64,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"/>
          </defs>
        </svg>
      </div>
    </div>
  </div>
  )
}

function ChatBotDialog() {
  return (
    <div
      className="absolute -bottom-1/2 -right-1/4 md:-bottom-1/2 md:right-0 xl:-bottom-2/3 xl:-right-1/3 -translate-x-1/2 -translate-y-1/2 w-[360px] xl:w-[420px] h-auto bg-[#E1EEE9] rounded-3xl drop-shadow-[0px_3px_7px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col gap-2 xl:gap-4 px-3 py-4 xl:py-6 xl:px-4">
        <div className="flex items-center gap-[7px] xl:gap-1.5">
          <div className="w-4 h-4 xl:w-6 xl:h-6 rounded-full bg-[#E1EEE9] border border-[#000000]/10"/>
          <span className="text-xs xl:text-base font-semibold leading-5">You</span>
        </div>
        <p className="text-xs xl:text-sm leading-[150%]">Can you explain more about AI prompt?</p>
      </div>
      <div className="bg-[#CDDCD6] px-3 py-4 xl:py-6 xl:px-4">
        <div className="flex flex-col gap-2 xl:gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 xl:w-6 xl:h-6 rounded-full bg-[#E1EEE9] border border-[#000000]/10"/>
            <span className="text-xs xl:text-base font-semibold leading-5">AI Mentor</span>
          </div>
          <p className="text-xs xl:text-sm text-[#2F2F2F] leading-[150%]">Can you explain more about AI prompt?</p>
          <div
            className="bg-[#F1FFFC] py-5 px-3 rounded-[4px] border-l-2 xl:border-l-4 border-[#1AADB5] font-medium leading-[140%] text-[#484242] text-xs xl:text-base">
            An AI prompt is an instruction or input given to an AI model to generate a specific response. A well-crafted
            prompt helps the AI produce clear, relevant, and high-quality output.
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-3 h-3 xl:w-4 xl:h-4">
                <path
                  d="M10.1895 3.83201C10.0199 2.73837 9.23235 2 8.04555 2H4.19579C2.85559 2 2.01367 2.95192 2.01367 4.29665V7.92247C2.01367 9.14753 2.71387 10.0503 3.86187 10.1926"
                  stroke="#776F69" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M11.804 5.78644H7.95553C6.6147 5.78644 5.77344 6.73578 5.77344 8.07984V11.7057C5.77344 13.0498 6.61017 13.9991 7.95553 13.9991H11.8033C13.1494 13.9991 13.9861 13.0498 13.9861 11.7057V8.07984C13.9861 6.73578 13.1494 5.78644 11.804 5.78644Z"
                      stroke="#776F69" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xs xl:text-sm text-[#776F69] leading-[18px]">Copy</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-3 h-3 xl:w-4 xl:h-4">
                <path d="M2.66602 5.39667L3.7383 7.93275L6.26042 6.86642" stroke="#776F69" strokeWidth="1.33333"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <path
                  d="M3.88672 7.87002C3.95135 5.32262 6.04099 3.27606 8.60993 3.27606C11.2166 3.27606 13.3332 5.39264 13.3332 7.99929C13.3332 10.6114 11.2166 12.7226 8.60993 12.7226C6.99427 12.7226 5.57243 11.9147 4.71611 10.6814"
                  stroke="#776F69" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xs xl:text-sm text-[#776F69] leading-[18px]">Regenerate</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 xl:mt-[13px] py-2 xl:py-4 px-2.5 ">
        <div
          className="bg-[#FFFFFF] rounded-[30px] px-2 py-2.5 xl:px-4 h-8 xl:h-11 border border-[#776F69]/28 flex items-center justify-between">
                <span className="text-xs xl:text-base text-[#838383] leading-[150%]">
                  Ask me anything...
                </span>
          <div className="bg-[#1AADB5] w-6 h-6 xl:w-8 xl:h-8 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" className="w-3 h-3 xl:w-4 xl:h-4">
              <path
                d="M11.2679 5.73968L6.68918 10.3673L1.4815 7.11011C0.735353 6.64329 0.890565 5.50992 1.73453 5.26312L14.0989 1.64219C14.8718 1.41568 15.588 2.13824 15.3584 2.91357L11.7004 15.2694C11.4498 16.1145 10.3229 16.2655 9.86052 15.5162L6.68676 10.3681"
                stroke="#F3EEE9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bottom-1 right-2 translate-x-1/2 translate-y-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="36" viewBox="0 0 39 36" fill="none">
          <path
            d="M0.741491 13.9647L26.1568 0.0155314L32.4495 17.8381L38.7423 35.6607L19.7419 24.8127L0.741491 13.9647Z"
            fill="#E1EEE9"/>
        </svg>
      </div>
      <div className="absolute bottom-0 -right-10 xl:bottom-10 xl:-right-[120px] translate-x-1/2 translate-y-1/2">
        <img alt="rabbit" src={Rabbit.src} className="w-[65px] h-[87px] xl:w-[175px] xl:h-[212px]" />
      </div>
    </div>
  )
}

