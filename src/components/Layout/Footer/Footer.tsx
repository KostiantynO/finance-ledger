import { Container } from 'components/shared';

export const Footer = () => (
  <footer>
    <Container>
      <ul>
        <li>facebook</li>
        <li>twitter</li>
        <li>youtube</li>
        <li>linkedin</li>
      </ul>

      <p>Copyright © {new Date().getFullYear()} - FinanceLedger</p>
    </Container>
  </footer>
);
