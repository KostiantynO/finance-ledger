import styled, { css } from 'styled-components';
import bg from 'assets/images/home/showcase.jpg';
import bg2x from 'assets/images/home/showcase@2x.jpg';

const retina = (url: string, minWidth: string) => css`
  @media screen and (min-device-pixel-ratio: 2) and (min-width: ${minWidth}),
    (min-resolution: 192dpi) and (min-width: ${minWidth}),
    (min-resolution: 2dppx) and (min-width: ${minWidth}) {
    background-image: url(${url});
  }
`;

export const HeroSection = styled.section`
  position: relative;
  height: 533px;
  padding: 62px 20px 104px;
  background: ${({ theme }) => theme.color.heroBg} url(${bg}) center top/cover
    no-repeat fixed;

  ${({ theme }) => retina(bg2x, theme.bp.mobile)}
`;

// background:
// bg-color✅
// bg-image✅
// position/bg-size✅
// bg-repeat✅
// bg-origin
// bg-clip
// bg-attachment
