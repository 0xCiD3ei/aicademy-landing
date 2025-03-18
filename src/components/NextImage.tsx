import Image, { ImageProps } from 'next/image';
import * as React from 'react';

import { cn } from '@/lib/utils';

type NextImageProps = {
  useSkeleton?: boolean;
  classNames?: {
    image?: string;
    blur?: string;
  };
  alt: string;
  responsive?: boolean; // Thêm flag để quyết định có dùng responsive không
  aspectRatio?: string; // Cho phép tùy chỉnh tỷ lệ nếu cần
} & (
  | { width: number | string; height: number | string; responsive?: false }
  | { width?: never; height?: never; responsive: true; aspectRatio?: string }
) &
  ImageProps;

export default function NextImage({
  useSkeleton = false,
  src,
  alt,
  className,
  classNames,
  responsive = false,
  aspectRatio,
  width,
  height,
  ...rest
}: NextImageProps) {
  const [status, setStatus] = React.useState(
    useSkeleton ? 'loading' : 'complete'
  );

  return responsive ? (
    // Nếu responsive, dùng div parent để kiểm soát kích thước
    <div
      className={cn('relative w-full', className)}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <Image
        className={cn(
          'object-cover',
          classNames?.image,
          status === 'loading' && cn('animate-pulse', classNames?.blur)
        )}
        src={src}
        fill
        alt={alt}
        onLoadingComplete={() => setStatus('complete')}
        {...rest}
      />
    </div>
  ) : (
    // Nếu không responsive, dùng width/height như bình thường
    <figure
      style={{ width: `${width}px`, height: `${height}px` }}
      className={className}
    >
      <Image
        className={cn(
          classNames?.image,
          status === 'loading' && cn('animate-pulse', classNames?.blur)
        )}
        src={src}
        width={width}
        height={height}
        alt={alt}
        onLoadingComplete={() => setStatus('complete')}
        {...rest}
      />
    </figure>
  );
}
