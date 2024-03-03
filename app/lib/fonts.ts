import localFont from 'next/font/local';

const fontSans = localFont({
  src: './PloniRegular.otf',
  display: 'swap',
  variable: '--font-sans',
});
export const fonts = [fontSans.variable].join(' ');

// add to font variable in tailwind/typography.ts
