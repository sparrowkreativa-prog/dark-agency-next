import './globals.css';
import { DM_Serif_Display } from 'next/font/google';

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
});

export const metadata = {
  title: 'Dark Agency',
  description: 'The most considered way to grow your brand, without anyone missing a beat.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSerifDisplay.variable}>
      <body>{children}</body>
    </html>
  );
}
