import type { Metadata } from 'next';
import { Inter, Manrope, Open_Sans, Poppins, Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto',
});
const manrope = Manrope({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-manrope',
});

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const poppin = Poppins({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-poppin',
});

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'Workshop | Sian',
  description: 'this workshop practice by sian',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${manrope.variable} ${inter.variable} ${open_sans.variable} ${poppin.variable}`}
    >
      <body className="w-screen">{children}</body>
    </html>
  );
}
