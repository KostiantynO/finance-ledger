import { routes } from 'common';
import { LogoLink, BookIcon, White } from './Logo.styled';

const { root } = routes;

export const Logo = () => (
  <LogoLink href={root}>
    <BookIcon />
    Finance
    <White>Ledger</White>
  </LogoLink>
);
