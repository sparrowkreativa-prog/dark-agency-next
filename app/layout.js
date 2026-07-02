import './globals.css';

export const metadata = {
  title: 'Dark Agency',
  description: 'The most considered way to grow your brand, without anyone missing a beat.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
