import { FooterContainer, FooterStyled, Social } from './Footer.styled';

export const Footer = () => (
  <FooterStyled>
    <FooterContainer>
      <Social style={{ display: 'flex' }}>
        <li>
          <img
            alt="facebook"
            height="30"
            src="/vite.svg"
            title="facebook"
            width="30"
          />
        </li>

        <li>
          <img
            alt="twitter"
            height="30"
            src="/vite.svg"
            title="twitter"
            width="30"
          />
        </li>

        <li>
          <img
            alt="youtube"
            height="30"
            src="/vite.svg"
            title="youtube"
            width="30"
          />
        </li>

        <li>
          <img
            alt="linkedin"
            height="30"
            src="/vite.svg"
            title="linkedin"
            width="30"
          />
        </li>
      </Social>

      <p>Copyright © {new Date().getFullYear()} - FinanceLedger</p>
    </FooterContainer>
  </FooterStyled>
);
