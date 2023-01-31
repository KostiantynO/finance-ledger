import styled from 'styled-components';
import { bgGradient, retinaGradient } from 'common/styles';

import jpg from 'assets/images/home/showcase.jpg';
import webp from 'assets/images/home/showcase.webp';

import jpg2x from 'assets/images/home/showcase@2x.jpg';
import webp2x from 'assets/images/home/showcase@2x.webp';

export const HeroSection = styled.section`
  position: relative;

  height: 533px;
  padding: 62px 20px 104px;

  text-align: center;

  background: ${({ theme }) => theme.color.heroBg} center top/cover no-repeat;

  ${bgGradient({ jpg, webp })}
  ${retinaGradient({ jpg2x, webp2x })}

  .thumb {
    display: flex;
    justify-content: center;
  }
`;

export const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 40px;
  line-height: 54px;
  color: ${({ theme }) => theme.color.white};
`;

export const HeroDescription = styled.h2`
  font-size: 26px;
  line-height: 32px;
  color: ${({ theme }) => theme.color.white};
`;

// background:
// bg-color✅
// bg-image✅
// position/bg-size✅
// bg-repeat✅
// bg-origin
// bg-clip
// bg-attachment
