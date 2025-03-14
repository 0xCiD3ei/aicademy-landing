import Banner from '@/components/homepage/header/Banner';

import Logo from '@/assets/homepage/logo.svg';

export default function Header() {
  return (
    <>
      <header className='lg:mt-5 lg:px-[72px] w-full h-[60px] md:h-[92px] flex items-center justify-center'>
        <div className='bg-[#F3F3F3] px-5 rounded-xl flex items-center justify-between h-full w-full'>
          <div>
            <Logo className='w-[220px] h-[52px]' />
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
