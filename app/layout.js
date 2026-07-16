import './globals.css';
import { DM_Serif_Display } from 'next/font/google';
import Script from 'next/script';
import ScrollToTop from '@/components/ScrollToTop';
import ChatButton from '@/components/ChatButton';

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
      <body>
        {children}
        <ScrollToTop />
        <ChatButton />
        <Script id="tawk-init" strategy="afterInteractive">{`
          var Tawk_API = Tawk_API || {};
          Tawk_API.onLoad = function() { Tawk_API.hideWidget(); };
        `}</Script>
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          src="https://embed.tawk.to/6a58a563bca1d21d4c999241/1jtl4c3e9"
          crossOrigin="*"
        />
      </body>
    </html>
  );
}
