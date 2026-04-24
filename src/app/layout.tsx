import type { Metadata } from 'next';
import { BBH_Bartle, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/src/components/Navbar';

const passionOne = BBH_Bartle({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-passion',
});
const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Bagas Satrio | Frontend Web Developer',
  description: 'Frontend Developer focused on building fast, scalable, and user-friendly web applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${passionOne.variable} ${inter.variable} h-full antialiased`}
    >
      <body className={`${passionOne.className} min-h-full flex flex-col`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
