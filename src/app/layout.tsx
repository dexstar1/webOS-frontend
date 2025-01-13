import { Open_Sans } from 'next/font/google';
import './globals.css';
import Footer from './(shared)/footer';

const openSans = Open_Sans({
  subsets: ['latin'],
});

export const metadata = {
  title: "Oriadefolahan's blog",
  description: 'Tech, business, and more',
};

import { ReactNode } from 'react';
import Navbar from './(shared)/Navbar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={openSans.className} lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
