import './styles/globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const notojp = Noto_Sans_JP({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'ようこそ。ポートフォリオサイトへ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={notojp.className}>
        <Navbar />
        <CssBaseline />
        {children}
        <Footer />
      </body>
    </html>
  );
}
