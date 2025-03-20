'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

function LandmarkNumberOne({
  className,
  color,
}: {
  className?: string;
  color: string;
}) {
  // #0081BC
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='160'
      viewBox='0 0 115 160'
      fill='none'
    >
      <path
        d='M72.2176 131.523L84.1849 124.568L66.5036 152.315L54.5363 159.27L72.2176 131.523Z'
        fill='#047399'
      />
      <path
        d='M20.6593 11.0883L32.6266 4.13354C41.3888 -0.958749 53.5212 -0.240731 66.9163 7.49261L54.949 14.4474C41.5539 6.71405 29.4216 5.99603 20.6593 11.0883Z'
        fill='#047399'
      />
      <path
        d='M100.864 121.572L88.897 128.527C97.5493 123.498 102.914 112.813 102.958 97.6294C103.046 67.0482 81.5516 29.8093 54.9484 14.4499L66.9157 7.49512C93.5189 22.8545 115.011 60.0934 114.925 90.6747C114.881 105.858 109.514 116.543 100.864 121.572Z'
        fill='#047399'
      />
      <path
        d='M54.9461 14.446C81.5493 29.8054 103.041 67.0443 102.956 97.6255C102.89 121.057 90.1492 133.778 72.2175 131.522L54.5362 159.269L34.6237 108.605C18.0291 90.2773 6.53775 64.34 6.60103 41.9928C6.68906 11.4143 28.332 -0.918913 54.9461 14.446Z'
        fill={color || '#8F8F8F'}
      />
      <path
        d='M26.813 24.8114L29.2065 23.4194C36.0732 19.4275 45.5838 19.9915 56.082 26.0495L53.6886 27.4415C43.1931 21.3808 33.6825 20.8196 26.813 24.8114Z'
        fill='#D3CFCF'
      />
      <path
        d='M82.7133 115.486L80.3199 116.878C87.0986 112.938 91.3022 104.561 91.3353 92.6489C91.404 68.6813 74.5453 39.4839 53.6892 27.4423L56.0827 26.0503C76.9415 38.0919 93.7975 67.2893 93.7287 91.2569C93.6957 103.169 89.4921 111.546 82.7133 115.486Z'
        fill='#D3CFCF'
      />
      <path
        d='M80.3392 116.846C95.0654 108.287 95.0251 80.7388 80.2492 55.3154C65.4733 29.892 41.5571 16.2206 26.831 24.7793C12.1048 33.3381 12.145 60.8861 26.9209 86.3094C41.6968 111.733 65.613 125.404 80.3392 116.846Z'
        fill='white'
      />
      <path
        d='M57.2405 40.0427L57.0452 108.762L48.0326 103.557L48.1812 50.6784L40.5056 46.2464L40.5248 39.0193C42.6872 39.9711 44.7368 40.2078 46.7093 39.7676C48.6653 39.2999 50.0739 38.1829 50.935 36.3975L57.2405 40.0427Z'
        fill={color || '#8F8F8F'}
      />
    </svg>
  );
}

function LandmarkNumberTwo({
  className,
  color,
}: {
  className?: string;
  color: string;
}) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ offsetDistance: ['0%', '100%'] });
  }, [controls]);

  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='125'
      height='180'
      viewBox='0 0 131 180'
      fill='none'
    >
      <motion.path
        d='M81.926 148.06L95.4697 140.186L75.4582 171.593L61.9146 179.463L81.926 148.06Z'
        fill={color || '#8F8F8F'}
      />
      <motion.path
        d='M23.5747 11.7427L37.1184 3.87178C47.0361 -1.89178 60.7696 -1.07744 75.9282 7.67381L62.3845 15.5447C47.2232 6.79073 33.4897 5.97915 23.5747 11.7427Z'
        fill={color || '#8F8F8F'}
      />
      <motion.path
        d='M114.35 136.786L100.807 144.657C110.598 138.968 116.672 126.871 116.719 109.685C116.818 75.0709 92.4929 32.924 62.3821 15.5398L75.9257 7.66895C106.036 25.0532 130.362 67.2 130.263 101.814C130.216 119.001 124.144 131.094 114.35 136.786Z'
        fill={color || '#8F8F8F'}
      />
      <motion.path
        d='M62.3824 15.5424C92.4932 32.9267 116.818 75.0736 116.719 109.688C116.645 136.209 102.224 150.605 81.9289 148.052L61.9174 179.459L39.3804 122.117C20.5986 101.374 7.59417 72.0171 7.6657 46.7234C7.76199 12.1118 32.2606 -1.84727 62.3824 15.5424Z'
        fill={color || '#AFB3B2'}
      />
      <motion.path
        d='M30.5394 27.2738L33.2492 25.7001C41.0211 21.1828 51.7861 21.8183 63.6654 28.6768L60.9556 30.2504C49.0764 23.392 38.3113 22.7564 30.5394 27.2738Z'
        fill='#D3CFCF'
      />
      <motion.path
        d='M93.8068 129.898L91.097 131.472C98.7698 127.012 103.526 117.532 103.565 104.051C103.642 76.9256 84.5631 43.8793 60.9559 30.2504L63.6657 28.6768C87.2729 42.3057 106.352 75.3519 106.275 102.478C106.236 115.958 101.48 125.439 93.8068 129.898Z'
        fill='#D3CFCF'
      />
      <motion.path
        d='M91.1234 131.425C107.79 121.739 107.744 90.5599 91.02 61.7854C74.2964 33.0108 47.2284 17.5369 30.5619 27.2234C13.8954 36.9098 13.9418 68.0886 30.6653 96.8631C47.3889 125.638 74.4569 141.112 91.1234 131.425Z'
        fill='white'
      />
      <motion.path
        d='M58.7114 43.7865C62.6124 46.0397 65.9468 49.6326 68.6951 54.5984C71.427 59.5531 72.8025 64.2822 72.7888 68.7665C72.775 73.3994 71.8589 77.3417 70.0569 80.6073C69.0665 82.4285 66.7803 85.2291 63.1681 88.9706C62.197 90.005 60.739 91.6502 58.8104 93.8951L57.19 95.7438C56.1528 96.946 55.3578 97.9337 54.8241 98.6655C54.5655 99.0534 54.4334 99.312 54.4334 99.4248L71.9607 109.543L71.9332 119.585L43.5555 103.202L43.5831 93.7906C43.5831 93.5677 44.2323 92.6984 45.5281 91.1467C46.1444 90.4617 46.8238 89.7052 47.5859 88.8633L49.9189 86.3681C51.2807 85.02 53.4183 82.8219 56.3317 79.7902C59.0855 76.9621 61.1434 74.1614 62.5079 71.3498C63.6276 69.0636 64.1833 66.6564 64.1916 64.1199C64.1971 62.0621 63.7019 60.0153 62.6895 57.9822C61.5973 55.8308 60.1805 54.2517 58.439 53.2448C55.9548 51.8115 54.1941 52.4442 53.1376 55.1376C52.7965 56.0179 52.615 57.2119 52.6095 58.7498L52.6011 61.344L43.8141 56.271L43.8197 54.4746C43.8389 48.0452 45.3685 43.9929 48.4085 42.3505C51.0331 40.8566 54.4554 41.3298 58.7114 43.7865Z'
        fill={color || '#AFB3B2'}
      />
    </svg>
  );
}

function LandmarkNumberThree({
  className,
  color,
}: {
  className?: string;
  color: string;
}) {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='140'
      height='236'
      viewBox='0 0 172 236'
      fill='none'
    >
      <path
        d='M107.658 194.593L125.458 184.249L99.1602 225.521L81.3605 235.862L107.658 194.593Z'
        fill={color || '#8F8F8F'}
      />
      <path
        d='M30.9727 15.466L48.7723 5.1218C61.8043 -2.45198 79.8515 -1.38453 99.7695 10.1178L81.9698 20.462C62.0519 8.9596 44.0046 7.89219 30.9727 15.466Z'
        fill={color || '#8F8F8F'}
      />
      <path
        d='M150.264 179.792L132.465 190.136C145.332 182.659 153.313 166.765 153.376 144.179C153.505 98.6921 121.54 43.307 81.971 20.4618L99.7706 10.1177C139.34 32.9628 171.305 88.348 171.175 133.835C171.112 156.421 163.131 172.314 150.264 179.792Z'
        fill={color || '#8F8F8F'}
      />
      <path
        d='M81.9707 20.4591C121.54 43.3043 153.505 98.6895 153.376 144.176C153.276 179.027 134.327 197.946 107.655 194.593L81.3571 235.865L51.7415 160.512C27.0614 133.254 9.96881 94.6756 10.0651 61.4368C10.1944 15.9473 42.3878 -2.39701 81.9707 20.4591Z'
        fill={color || '#AFB3B2'}
      />
      <path
        d='M40.1265 35.879L43.6865 33.8102C53.9013 27.8733 68.0475 28.7097 83.6572 37.7223L80.0973 39.7911C64.4875 30.7785 50.3414 29.9421 40.1265 35.879Z'
        fill='#D3CFCF'
      />
      <path
        d='M123.268 170.74L119.708 172.809C129.791 166.949 136.041 154.489 136.091 136.775C136.193 101.129 111.119 57.7024 80.0978 39.79L83.6577 37.7212C114.679 55.6309 139.753 99.057 139.651 134.706C139.601 152.42 133.351 164.88 123.268 170.74Z'
        fill='#D3CFCF'
      />
      <path
        d='M119.74 172.779C141.641 160.051 141.58 119.079 119.604 81.266C97.6275 43.4534 62.0575 23.1192 40.1561 35.8482C18.2546 48.5771 18.3154 89.5491 40.2918 127.362C62.2682 165.174 97.8382 185.508 119.74 172.779Z'
        fill='white'
      />
      <path
        d='M75.7997 47.8314C82.4739 51.6857 87.822 57.3695 91.8221 64.8745C95.4206 71.6477 97.2253 78.5172 97.206 85.5022L97.1923 90.0966C97.1731 96.8588 95.3821 101.654 91.8552 104.534C90.3503 105.745 88.5869 106.49 86.5676 106.771C90.785 111.935 94.0285 117.927 96.3367 124.807C97.5389 128.34 98.1249 132.131 98.1139 136.169L98.0891 144.728C98.0671 152.75 95.6627 157.969 90.873 160.346C86.2787 162.668 80.7737 161.975 74.3582 158.272C68.0691 154.64 62.7568 149.031 58.4018 141.432C54.0468 133.814 51.8706 126.472 51.8899 119.357L51.8982 116.689L65.4611 123.294L65.7555 127.289C65.9425 130.106 66.7899 132.821 68.2672 135.421C69.7446 138.002 71.6621 139.98 74.017 141.339C80.5481 145.108 83.8302 143.515 83.8495 136.53L83.8687 130.139C83.899 119.002 78.837 110.493 68.6964 104.639L68.7349 90.6331C74.2013 93.7886 78.2537 94.3663 80.8755 92.3717C83.302 90.5808 84.5097 86.842 84.5262 81.117L84.5345 78.6162C84.5537 71.5211 81.8549 66.4178 76.438 63.2898C73.4228 61.5484 71.2109 61.5897 69.7831 63.4191C68.7294 64.8139 68.1902 67.1194 68.1819 70.3244L68.1737 73.1773L54.2421 65.1331L54.2503 62.6131C54.2724 54.888 56 49.5756 59.4307 46.6924C63.296 43.3774 68.7542 43.7653 75.7997 47.8314Z'
        fill={color || '#AFB3B2'}
      />
    </svg>
  );
}

function LandmarkNumberFour({
  className,
  color,
}: {
  className?: string;
  color: string;
}) {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='160'
      height='287'
      viewBox='0 0 209 287'
      fill='none'
    >
      <path
        d='M130.965 236.483L152.613 223.902L120.629 274.098L98.9806 286.679L130.965 236.483Z'
        fill={color || '#8F8F8F'}
      />
      <path
        d='M37.6946 18.6167L59.343 6.03591C75.1921 -3.17478 97.1431 -1.87632 121.372 12.1103L99.7237 24.6911C75.4947 10.7045 53.5437 9.40325 37.6946 18.6167Z'
        fill={color || '#8F8F8F'}
      />
      <path
        d='M182.784 218.478L161.135 231.059C176.786 221.964 186.492 202.632 186.569 175.165C186.726 119.843 147.847 52.4768 99.7197 24.6906L121.368 12.1099C169.493 39.896 208.375 107.259 208.218 162.584C208.141 190.051 198.435 209.383 182.784 218.478Z'
        fill={color || '#8F8F8F'}
      />
      <path
        d='M99.7233 24.6914C147.848 52.4776 186.73 119.841 186.573 175.166C186.452 217.555 163.406 240.565 130.965 236.485L98.9806 286.682L62.9576 195.031C32.9376 161.878 12.1503 114.958 12.2658 74.5305C12.4226 19.2058 51.5763 -3.10569 99.7233 24.6914Z'
        fill={color || '#AFB3B2'}
      />
      <path
        d='M48.8323 43.4362L53.1625 40.919C65.5865 33.7001 82.7919 34.7152 101.78 45.6784L97.4497 48.1956C78.4589 37.2325 61.2562 36.2146 48.8323 43.4362Z'
        fill='#D3CFCF'
      />
      <path
        d='M149.952 207.467L145.621 209.985C157.883 202.859 165.487 187.704 165.548 166.157C165.671 122.8 135.175 69.9812 97.4441 48.1979L101.774 45.6807C139.506 67.4666 170.002 120.282 169.878 163.64C169.82 185.186 162.216 200.339 149.952 207.467Z'
        fill='#D3CFCF'
      />
      <path
        d='M145.659 209.937C172.297 194.455 172.224 144.622 145.494 98.632C118.765 52.6419 75.5022 27.9103 48.8637 43.3924C22.2252 58.8745 22.2986 108.708 49.0278 154.698C75.757 200.688 119.02 225.42 145.659 209.937Z'
        fill='white'
      />
      <path
        d='M101.152 148.816L111.843 154.987L111.788 174.275L101.097 168.104L101.02 195.525L84.299 185.871L84.376 158.451L54.854 141.405L54.909 122.117L84.6594 58.4922L101.381 68.1458L101.152 148.816ZM84.4311 139.163L84.5439 99.3653L70.6453 131.204L84.4311 139.163Z'
        fill={color || '#AFB3B2'}
      />
    </svg>
  );
}

export {
  LandmarkNumberFour,
  LandmarkNumberOne,
  LandmarkNumberThree,
  LandmarkNumberTwo,
};
