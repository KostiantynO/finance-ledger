import { routes } from 'common';
import { LogoLink, BookIcon, Row } from './Logo.styled';

const { root } = routes;

export const Logo = () => (
  <LogoLink href={root}>
    <Row>
      <BookIcon />
      <span className="accent">Finance</span>
    </Row>

    <span className="normal">Ledger</span>
  </LogoLink>
);
