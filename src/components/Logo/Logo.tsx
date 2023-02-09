import { routes } from 'common';
import { BookIcon, LogoLink, White } from './Logo.styled';

const { root } = routes;

export const Logo = () => (
  <LogoLink href={root}>
    <BookIcon />
    Finance
    <White>Ledger</White>
  </LogoLink>
);
