import type { EntityId } from 'types';
import { sizesCard } from 'App/theme';
import { Heading } from 'components/Chat';
import { CenteredSection } from 'components/sections/Cases';
import { Container, Picture } from 'components/shared';
import { TeamListStyled } from './Team.styled';
import { TeamContextProvider, useTeamContext } from './TeamData';

const Specialist = ({ specialistId }: { specialistId: EntityId }) => {
  const {
    name,
    surname,
    position,
    photos: { webp, webp2x, jpg, jpg2x },
  } = useTeamContext().entities[specialistId];

  const fullName = `${name} ${surname}`;
  const alt = `${fullName} - ${position}`;

  return (
    <li>
      <Picture
        webp={webp}
        webp2={webp2x}
        jpg={jpg}
        jpg2={jpg2x}
        alt={alt}
        sizes={sizesCard}
        w="640w"
        w2="1280w"
      />

      <p>{fullName}</p>
      <p>{position}</p>
    </li>
  );
};

const TeamList = () => {
  const team = useTeamContext();

  return (
    <TeamListStyled>
      {team.ids.map(id => (
        <Specialist key={id} specialistId={id} />
      ))}
    </TeamListStyled>
  );
};

export const Team = () => (
  <CenteredSection id="team">
    <Container>
      <div>
        <h3 className="smallText">Who we are</h3>

        <Heading>Our Professional Team</Heading>

        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
      </div>

      <TeamContextProvider>
        <TeamList />
      </TeamContextProvider>
    </Container>
  </CenteredSection>
);
