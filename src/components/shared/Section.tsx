import type { ReactNode } from 'react';
import { LevelContextProvider } from 'features/chat';
import { SectionStyled } from './Section.styled';

interface SectionProps {
  id?: string;
  isFancy?: boolean;
  children: ReactNode;
}

export const Section = ({ id, isFancy, children }: SectionProps) => (
  <SectionStyled $isFancy={isFancy} id={id}>
    <LevelContextProvider>{children}</LevelContextProvider>
  </SectionStyled>
);
