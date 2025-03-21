'use client';

import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export const ContentModal = ({
  content,
  ...props
}: HTMLAttributes<HTMLDivElement> & { content: string }) => {
  return (
    <div
      {...props}
      className={cn(
        'absolute text-white rounded-xl lg:max-w-[240px] sm:max-w-[130px] max-w-[90px] bg-[#484242] text-center sm:p-2 p-1 inline-block',
        props.className
      )}
    >
      <p className='text-[10px] sm:text-base lg:font-semibold lg:text-2xl max-w-fit font-medium inline-block sm:!font-medium'>
        {content}
      </p>
    </div>
  );
};
