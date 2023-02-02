import styled from 'styled-components';

import { bgGradient, retinaGradient, transition } from 'common/styles';

import jpg from 'assets/images/home/showcase.jpg';
import webp from 'assets/images/home/showcase.webp';

import jpg2x from 'assets/images/home/showcase@2x.jpg';
import webp2x from 'assets/images/home/showcase@2x.webp';
import { ReactComponent as Right } from 'assets/svg/right.svg';

export const ArrowRight = styled(Right)`
  width: 9px;
  height: 18px;
`;

export const HeroSection = styled.section`
  position: relative;

  height: 533px;
  padding: 160px 20px 104px;

  text-align: center;

  background: ${({ theme }) => theme.color.heroBg} center top/cover no-repeat;

  ${bgGradient({ jpg, webp })}
  ${retinaGradient({ jpg2x, webp2x })}

  content-visibility: auto;
  contain-intrinsic-size: 533px;

  .thumb {
    display: flex;
    justify-content: center;
  }
`;

export const HeroTitle = styled.h1`
  margin: 0 auto 16px;

  font-weight: 600;
  font-size: 40px;
  line-height: 1.35;
  color: ${({ theme }) => theme.color.white};
  text-transform: capitalize;

  @media screen and (max-width: ${({ theme }) => theme.bp.preTablet}) {
    width: 241px;
  }
`;

export const HeroDescription = styled.p`
  margin-bottom: 24px;

  font-size: 26px;
  line-height: 1.23;
  color: ${({ theme }) => theme.color.white};
`;

const buttonTransition = transition('background-color');

export const Button = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 175px;
  height: 57px;
  padding: 16px 32px;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  font-family: ${({ theme }) => theme.font.openSans};
  color: ${({ theme }) => theme.color.white};

  background-color: ${({ theme }) => theme.color.accent};
  border: none;
  border-radius: 5px;

  ${buttonTransition}

  &:hover {
    background-color: ${({ theme }) => theme.color.btnHover};
  }
`;

export const HeroButton = styled(Button)`
  margin: 0 auto;
`;

// background:
// bg-color✅
// bg-image✅
// position/bg-size✅
// bg-repeat✅
// bg-origin
// bg-clip
// bg-attachment
