import FacebookIcon from '@/assets/homepage/facebook.svg';
import FooterBg from '@/assets/homepage/FooterBg';
import TelegramIcon from '@/assets/homepage/telegram.svg';
import TwitterIcon from '@/assets/homepage/twitter.svg';
import YoutubeIcon from '@/assets/homepage/youtube.svg';

export default function Footer() {
  return (
    <footer className='mt-20'>
      <div className='flex items-center justify-center flex-col gap-5 lg:gap-8 mb-5 lg:mb-0'>
        <h1 className='font-dela-gothic-one text-primary-foreground text-[32px] md:text-[48px] lg:text-[64px] leading-[120%] text-center'>
          Let’s Start Your
          <p className='text-primary'>AI Learning Journey !</p>
        </h1>
        <p className='text-center text-primary-foreground text-sm md:text-xl lg:text-2xl'>
          Give badges, unlock achievements, and earn blockchain-verified NFT Certificates.
        </p>
        <div className='cursor-pointer bg-primary h-14 rounded-xl lg:rounded-full px-2 py-4 max-w-max flex items-center gap-2 drop-shadow-[3px_3px_0px_rgba(11,117,124,1)]'>
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
            Join now - It’s free
          </span>
        </div>
      </div>
      <FooterBg />
      <div className='border-y-4 border-border'>
        <div className='flex items-center justify-center w-full flex-col lg:flex-row'>
          <div className="flex items-center justify-center w-full">
            <div className='flex items-center justify-center bg-[#007880] h-[52px] lg:h-[100px] border-b-4 lg:border-b-0 border-r-4 border-border flex-1'>
              <FacebookIcon className="w-7 h-7 lg:w-10 lg:h-10" />
            </div>
            <div className='flex items-center justify-center bg-[#007880] h-[52px] lg:h-[100px] border-b-4 lg:border-b-0 lg:border-r-4 border-border flex-1'>
              <TwitterIcon className="w-7 h-7 lg:w-10 lg:h-10" />
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className='flex items-center justify-center bg-[#007880] h-[52px] lg:h-[100px] border-r-4 border-border flex-1'>
              <TelegramIcon className="w-7 h-7 lg:w-10 lg:h-10" />
            </div>
            <div className='flex items-center justify-center bg-[#007880] h-[52px] lg:h-[100px] flex-1'>
              <YoutubeIcon className="w-7 h-7 lg:w-10 lg:h-10" />
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center w-full h-[52px] lg:h-[100px] border-b-4 border-border text-border bg-[#007880] font-medium text-sm md:text-base lg:text-2xl leading-[120%] text-center'>
        © 2025 Autonomous School - AI-Driven Future of Education
      </div>
    </footer>
  );
}
