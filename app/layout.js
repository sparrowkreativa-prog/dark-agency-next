import './globals.css';
import { DM_Serif_Display } from 'next/font/google';
import ScrollToTop from '@/components/ScrollToTop';

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
});

export const metadata = {
  title: 'Velluto Nero',
  description: 'The most considered way to grow your brand, without anyone missing a beat.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSerifDisplay.variable}>
      <body>{children}<ScrollToTop /></body>
    </html>
  );
}
