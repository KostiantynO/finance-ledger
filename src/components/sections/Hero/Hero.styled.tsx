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
  background: ${({ theme }) => theme.color.heroBg} center top/cover no-repeat;

  ${bgGradient({ jpg, webp })}
  ${retinaGradient({ jpg2x, webp2x })}

  .thumb {
    display: flex;
    justify-content: center;
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
