import NextImage from '@/components/NextImage';

import Rabbit from '@/assets/homepage/rabbit.png';
import TouchHand from '@/assets/homepage/touch-hand.png';
import {useEffect, useState} from "react";

export default function Banner() {
  const [displayedHTML, setDisplayedHTML] = useState("")

  useEffect(() => {
    const paragraphs = [
      '<p>👋 Hi! I\'m your <span class="font-bold">AI Mentor</span>, here</p>',
      "<p>to guide you through interactive learning.</p>",
      "<p>Stuck on a concept? Need examples?</p>",
      "<p>Just summon me—I'm ready to help!</p>",
    ]
    
    let currentParagraphIndex = 0
    let currentIndex = 0
    let typingInterval: NodeJS.Timeout
    
    const typeNextChar = () => {
      if (currentParagraphIndex < paragraphs.length) {
        const currentParagraph = paragraphs[currentParagraphIndex]
        
        if (currentIndex < currentParagraph.length) {
          const nextChar = currentParagraph[currentIndex]
          let chunk = ""
          
          if (nextChar === "<") {
            const tagEndIndex = currentParagraph.indexOf(">", currentIndex)
            if (tagEndIndex !== -1) {
              chunk = currentParagraph.substring(currentIndex, tagEndIndex + 1)
              currentIndex = tagEndIndex + 1
            } else {
              chunk = nextChar
              currentIndex++
            }
          } else {
            chunk = nextChar
            currentIndex++
          }
          
          setDisplayedHTML((prev) => prev + chunk)
        } else {
          currentParagraphIndex++
          currentIndex = 0
          
          clearInterval(typingInterval)
          setTimeout(() => {
            typingInterval = setInterval(typeNextChar, 50)
          }, 1000)
        }
      } else {
        clearInterval(typingInterval)
      }
    }
    
    const startTimeout = setTimeout(() => {
      typingInterval = setInterval(typeNextChar, 50)
    }, 1000)
    
    
    return () => {
      clearTimeout(startTimeout)
      clearInterval(typingInterval)
    }
  }, [])
  
  return (
    <div className='w-full relative'>
      <div className='px-5 sm:pl-10 lg:pl-[154px]'>
        <div className='font-dela-gothic-one text-primary-foreground text-[40px] md:text-[60px] leading-[150%]'>
          <p>Learn AI</p>
          <p>The Smart Way !!!</p>
        </div>
        <div className='text-base text-secondary-foreground max-w-[350px] mt-6'>
          Interactive and gamified learning with an AI Mentor ready for instant,
          context-aware support anytime!
        </div>
        <div className='mt-8 lg:mt-10'>
          <div className='cursor-pointer bg-primary h-14 rounded-xl px-2 py-4 w-full sm:max-w-max flex items-center justify-center gap-2 drop-shadow-[3px_3px_0px_rgba(198,198,198,1)] hover:bg-btn-hover'>
            <div className='w-10 h-10 rounded-full bg-white flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M11 8H13V9H11V8ZM11 4H13V5H11V4ZM11 10H13V11H11V10Z'
                  fill='#1AADB5'
                />
                <path
                  d='M21 12V9C17.9514 8.99904 14.9975 10.0598 12.646 12H11.354C9.00246 10.0598 6.04864 8.99904 3 9V12C2.73478 12 2.48043 12.1054 2.29289 12.2929C2.10536 12.4804 2 12.7348 2 13V15C2 15.2652 2.10536 15.5196 2.29289 15.7071C2.48043 15.8946 2.73478 16 3 16V20C6.34212 19.9966 9.56013 21.266 12 23.55C14.4426 21.2703 17.6588 20.0017 21 20V16C21.2652 16 21.5196 15.8946 21.7071 15.7071C21.8946 15.5196 22 15.2652 22 15V13C22 12.7348 21.8946 12.4804 21.7071 12.2929C21.5196 12.1054 21.2652 12 21 12Z'
                  fill='#1AADB5'
                />
                <path
                  d='M9 5C9.55228 5 10 4.55228 10 4C10 3.44772 9.55228 3 9 3C8.44772 3 8 3.44772 8 4C8 4.55228 8.44772 5 9 5Z'
                  fill='#1AADB5'
                />
                <path
                  d='M15 5C15.5523 5 16 4.55228 16 4C16 3.44772 15.5523 3 15 3C14.4477 3 14 3.44772 14 4C14 4.55228 14.4477 5 15 5Z'
                  fill='#1AADB5'
                />
                <path
                  d='M16 8H8C7.20459 7.99921 6.44199 7.68288 5.87956 7.12044C5.31712 6.55801 5.00079 5.79541 5 5V3C5.00079 2.20459 5.31712 1.44199 5.87956 0.879557C6.44199 0.31712 7.20459 0.000794215 8 0L16 0C16.7954 0.000794215 17.558 0.31712 18.1204 0.879557C18.6829 1.44199 18.9992 2.20459 19 3V5C18.9992 5.79541 18.6829 6.55801 18.1204 7.12044C17.558 7.68288 16.7954 7.99921 16 8ZM8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V5C7 5.26522 7.10536 5.51957 7.29289 5.70711C7.48043 5.89464 7.73478 6 8 6H16C16.2652 6 16.5196 5.89464 16.7071 5.70711C16.8946 5.51957 17 5.26522 17 5V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2H8Z'
                  fill='#1AADB5'
                />
              </svg>
            </div>
            <span className='text-xl leading-6 font-semibold text-white'>
              Start Learning
            </span>
          </div>
        </div>
        <div className='hidden lg:block mt-10 relative max-w-max'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='736'
            height='491'
            viewBox='0 0 736 491'
            fill='none'
          >
            <path
              d='M405.353 107.994C405.353 107.994 437.141 52.8056 501.712 71.2618C560.52 88.0947 557.474 143.824 557.474 143.824C557.474 143.824 729.794 108.234 734.894 225.614C740.589 356.37 563.997 356.34 563.997 356.34C563.997 356.34 543.997 392.26 501.347 391.359C464.195 390.547 452.704 362.532 452.704 362.532C452.704 362.532 351.742 448.38 196.575 427.008C80.0165 410.957 51.7711 333.706 51.7711 333.706C51.7711 333.706 17.9295 339.657 3.19421 308.757C-11.5411 277.856 29.486 258.108 29.486 258.108C29.486 258.108 -13.0643 107.543 134.488 50.9119C315.285 -18.464 405.353 107.964 405.353 107.964V107.994Z'
              fill='#E6F4F1'
            />
            <path
              d='M330.282 83.3537C329.122 71.8019 358.139 46.5735 379.641 44.045C389.97 42.8305 385.595 31.8835 372.778 28.2183C345.464 20.3686 298.947 36.0995 277.841 58.952'
              fill='#E6F4F1'
            />
            <path
              d='M48.9937 384.133C48.9937 384.133 129.765 495.942 302.042 454.885C148.217 525.506 55.9607 418.566 48.9937 384.133Z'
              fill='#61B0B9'
            />
            <path
              d='M590 129.828C590 129.828 700.094 114.762 734.893 181.591C719.828 86.5619 590 129.828 590 129.828Z'
              fill='#61B0B9'
            />
          </svg>
          <div
            className='absolute top-60 left-20 -translate-y-1/2 h-[196px] font-comic-sans-ms text-[30px] text-[#005963] leading-[50px]'>
            <div className="inline" dangerouslySetInnerHTML={{__html: displayedHTML}}/>
            {/*<span*/}
            {/*  className={`${cursorVisible ? "opacity-100" : "opacity-0"} border-r-2 border-primary h-7 inline-block`}*/}
            {/*></span>*/}
          </div>
          <div className='absolute -top-[28%] right-[24%]'>
            <NextImage src={Rabbit} alt='rabbit' width={201} height={243}/>
          </div>
        </div>
      </div>
      <div className='hidden absolute -bottom-[25%] right-0'>
        <NextImage src={TouchHand} alt='touch-hand' width={1006} height={968}/>
      </div>
    </div>
  );
}
