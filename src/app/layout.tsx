import './styles/globals.css';
import Favicon from '/public/favicon/favicon.ico';
import type { Metadata } from 'next';
import { Noto_Sans_JP, Roboto_Mono } from 'next/font/google';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const notojp = Noto_Sans_JP({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
});

const roboto_mono = Roboto_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'ようこそ。ポートフォリオサイトへ',
  icons: [
    { rel: 'icon', url: Favicon.src },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'mask-icon',
      url: '/favicon/safari-pinned-tab.svg',
      color: '#5bbad5',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${notojp.className} ${roboto_mono.className}`}>
      <body>
        <Navbar />
        <CssBaseline />
        {children}
        <Footer />
      </body>
    </html>
  );
}
