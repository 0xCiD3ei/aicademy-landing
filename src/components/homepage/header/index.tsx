import Banner from '@/components/homepage/header/Banner';

import Logo from '@/assets/homepage/logo.svg';
import LogoMb from '@/assets/homepage/logo-mb.svg';
import {useWindowSize} from "@/hooks/useWindowSize";

export default function Header() {
  const size = useWindowSize();
  
  return (
    <>
      <header className='lg:mt-5 lg:px-[72px] w-full h-[60px] md:h-[92px] flex items-center justify-center'>
        <div className='bg-[#F3F3F3] px-5 rounded-xl flex items-center justify-between h-full w-full'>
          <div>
            {
              size.innerWidth > 640 ? (
                <Logo className='w-[220px] h-[52px]' />
              ) : (
                <LogoMb className='w-10 h-10' />
              )
            }
          </div>
          <div className='cursor-pointer text-base text-white font-semibold bg-primary rounded-lg px-[29px] py-2.5 drop-shadow-[3px_3px_0px_rgba(11,117,124,1)] hover:bg-btn-hover'>
            Login
          </div>
        </div>
      </header>
      <div className='mt-10 lg:mt-[50px] mb-12'>
        <Banner />
      </div>
    </>
  );
}
