import { ButtonOutlinedAccent } from 'components/Button';
import { Heading } from 'components/Chat';
import { LevelContextProvider } from 'features/chat';
import { PeoplePhoto } from './PeoplePhoto';
import {
  ContainerPhotoLeft,
  SolutionsContentStyled,
  SolutionsSection,
} from './Solutions.styled';

const SolutionsContent = () => (
  <SolutionsContentStyled>
    <p className="smallText">What you are looking for</p>

    <LevelContextProvider>
      <Heading>We provide bespoke solutions</Heading>
    </LevelContextProvider>

    <p className="desc">
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
    <ContainerPhotoLeft $padding="0">
      <PeoplePhoto />

      <SolutionsContent />
    </ContainerPhotoLeft>
  </SolutionsSection>
);
