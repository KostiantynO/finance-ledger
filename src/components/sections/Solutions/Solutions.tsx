import peopleWebpM from 'assets/images/home/mobile/solutions-people.webp';
import peopleWebpM2x from 'assets/images/home/mobile/solutions-people@2x.webp';
import peopleJpgM from 'assets/images/home/mobile/solutions-people.jpg';
import peopleJpgM2px from 'assets/images/home/mobile/solutions-people@2x.jpg';

// TODO: squuosh
import peopleWebpT from 'assets/images/home/people.webp';
import peopleWebpT2x from 'assets/images/home/people@2x.webp';
import peopleJpgT from 'assets/images/home/people.jpg';
import peopleJpgT2x from 'assets/images/home/people@2x.jpg';

import { ButtonOutlinedAccent } from 'components/Button';
import {
  SolutionsSection,
  SolutionsContentStyled,
  SolutionsContainer,
  StyledPhoto,
} from './Solutions.styled';

const PeoplePhoto = () => (
  <StyledPhoto>
    {/* Desktop */}
    <source
      media="(min-width: 1360px)"
      sizes="(min-width: 1360px) 670px, 50vw"
      srcSet={`${peopleWebpT} 1x, ${peopleWebpT2x} 2x`}
      type="image/webp"
    />

    <source
      media="(min-width: 1360px)"
      sizes="(min-width: 1360px) 670px, 50vw"
      srcSet={`${peopleJpgT} 1x, ${peopleJpgT2x} 2x`}
      type="image/jpg"
    />

    {/* Tablet */}
    <source
      media="(min-width: 768px)"
      sizes="(min-width: 768px) 364px, 50vw"
      srcSet={`${peopleWebpT} 1x, ${peopleWebpT2x} 2x`}
      type="image/webp"
    />

    <source
      media="(min-width: 768px)"
      sizes="(min-width: 768px) 364px, 50vw"
      srcSet={`${peopleJpgT} 1x, ${peopleJpgT2x} 2x`}
      type="image/jpg"
    />

    {/* Mobile */}
    <source
      media="(max-width: 767px)"
      sizes="100vw"
      srcSet={`${peopleWebpM} 1x, ${peopleWebpM2x} 2x`}
      type="image/webp"
    />

    <source
      media="(max-width: 767px)"
      sizes="100vw"
      srcSet={`${peopleJpgM} 1x, ${peopleJpgM2px} 2x`}
      type="image/jpg"
    />

    <img src={peopleJpgM} alt="professional team" />
  </StyledPhoto>
);

const SolutionsContent = () => (
  <SolutionsContentStyled>
    <p className="smallText">What you are looking for</p>

    <h2 className="title">We provide bespoke solutions</h2>

    <p className="description">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum
      dignissimos quae laudantium asperiores nam aliquid impedit harum illum
      dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores
      deleniti?
    </p>

    <ButtonOutlinedAccent>Read More</ButtonOutlinedAccent>
  </SolutionsContentStyled>
);

export const Solutions = () => (
  <SolutionsSection id="about">
    <SolutionsContainer padding="0">
      <PeoplePhoto />
      <SolutionsContent />
    </SolutionsContainer>
  </SolutionsSection>
);
