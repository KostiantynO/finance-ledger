import type { ReactNode } from 'react';
import { Suspense } from 'react';
import { ObservedPixel } from 'common/hooks/ui';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <ObservedPixel />
    <Header />
    <Suspense>{children}</Suspense>
    <Footer />
  </>
);
