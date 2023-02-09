import styled from 'styled-components';
import { bg, bgGradient, retina, retinaGradient } from 'common/styles';

import jpgM from 'assets/images/home/mobile/hero.jpg';
import webpM from 'assets/images/home/mobile/hero.webp';
import jpgM2x from 'assets/images/home/mobile/hero@2x.jpg';
import webpM2x from 'assets/images/home/mobile/hero@2x.webp';
import jpgT from 'assets/images/home/showcase.jpg';
import webpT from 'assets/images/home/showcase.webp';
import jpgT2x from 'assets/images/home/showcase@2x.jpg';
import webpT2x from 'assets/images/home/showcase@2x.webp';
import { ReactComponent as Right } from 'assets/svg/right.svg';

export const ArrowRight = styled(Right)`
  width: 9px;
  height: 18px;
`;

export const HeroSection = styled.section`
  content-visibility: auto;
  position: relative;
  margin: 0 auto;
  height: 533px;

  text-align: center;

  background: ${({ theme }) => theme.color.heroBg} center top/cover no-repeat;

  @media screen and (max-width: ${({ theme }) => theme.bp.preTablet}) {
    contain-intrinsic-size: 533px;

    max-width: ${({ theme }) => theme.bp.tablet};
    padding-top: 160px;

    ${bg(jpgM, webpM)}
    ${retina(jpgM2x, webpM2x)}
  }

  // prettier-ignore
  @media screen and (min-width: ${({ theme }) => theme.bp.tablet})
      and (max-width: ${({ theme }) => theme.bp.preDesktop}) {
    contain-intrinsic-size: 1024px;

    max-width: ${({ theme }) => theme.bp.tablet};
    height: 1024px;
    padding-top: 378px;

    ${bgGradient(jpgT, webpT)}
    ${retinaGradient(jpgT2x, webpT2x)}
  }

  @media screen and (min-width: ${({ theme }) => theme.bp.desktop}) {
    contain-intrinsic-size: 768px;

    max-width: ${({ theme }) => theme.bp.desktop};
    height: 768px;
    padding-top: 272px;

    ${bgGradient(jpgT, webpT)}
    ${retinaGradient(jpgT2x, webpT2x)}
  }

  .thumb {
    display: flex;
    justify-content: center;
  }
`;

export const HeroTitle = styled.h1`
  margin: 0 auto 16px;

  font-weight: 600;
  font-size: 40px;
  line-height: 1.36;
  color: ${({ theme }) => theme.color.white};
  text-transform: capitalize;
  text-align: center;

  @media screen and (max-width: ${({ theme }) => theme.bp.preTablet}) {
    width: 241px;
  }

  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    font-size: 55px;
  }
`;

export const HeroDescription = styled.p`
  margin: 0 auto 24px;

  font-size: 26px;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.white};
  text-align: center;

  @media screen and (max-width: ${({ theme }) => theme.bp.preTablet}) {
    width: 280px;
  }

  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    width: 524px;

    font-size: 40px;
  }
`;

// background:
// bg-color✅
// bg-image✅
// position/bg-size✅
// bg-repeat✅
// bg-origin
// bg-clip
// bg-attachment
