import { Noto_Sans_JP, Inter } from 'next/font/google';

export const notojp = Noto_Sans_JP({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
});

export const inter = Inter({ subsets: ['latin'] })
