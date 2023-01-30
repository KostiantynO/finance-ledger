import type { ReactNode } from 'react';
import { Suspense } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <Suspense>{children}</Suspense>
    <Footer />
  </>
);
