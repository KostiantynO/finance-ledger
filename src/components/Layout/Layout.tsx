import type { ReactNode } from 'react';
import { Suspense } from 'react';
import { ObservedPixel } from 'common/hooks/ui';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <ObservedPixel />
    <Header />
    <Suspense>{children}</Suspense>
    <Footer />
  </>
);
