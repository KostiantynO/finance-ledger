import { routes } from 'common';
import { LogoLink, Accent, Normal, BookIcon, Row } from './Logo.styled';

const { root } = routes;

export const Logo = () => (
  <LogoLink to={root}>
    <Row>
      <BookIcon />
      <Accent>Finance</Accent>
    </Row>

    <Normal>Ledger</Normal>
  </LogoLink>
);
