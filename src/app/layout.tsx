'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import Navbar from './HomeComponents/Navbaar';
import Footer from './HomeComponents/Footer';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // List of routes where you want to hide the navbar
  const hideNavbarRoutes = ['/Signup', '/Login', '/ForgotPassword', '/CreatePassword'];
  const shouldHideNavbar = hideNavbarRoutes.includes(pathname);

  return (
    <html lang="en">
      <body>
        {!shouldHideNavbar && <Navbar />}
        {children}
        {!shouldHideNavbar && <Footer />}
      </body>
    </html>
  );
}
