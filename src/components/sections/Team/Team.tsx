import type { EntityId } from '@types';
import { createContext, useContext } from 'react';
import { sizesCard } from 'App/theme';
import { makeEntity } from 'common/utils';
import { Container, Picture } from 'components/shared';
import { TeamSection } from './Team.styled';

import person1jpg from 'assets/images/team/person1.jpg';
import person1webp from 'assets/images/team/person1.webp';
import person1jpg2x from 'assets/images/team/person1@2x.jpg';
import person1webp2x from 'assets/images/team/person1@2x.webp';
import person2jpg from 'assets/images/team/person2.jpg';
import person2webp from 'assets/images/team/person2.webp';
import person2jpg2x from 'assets/images/team/person2@2x.jpg';
import person2webp2x from 'assets/images/team/person2@2x.webp';
import person3jpg from 'assets/images/team/person3.jpg';
import person3webp from 'assets/images/team/person3.webp';
import person3jpg2x from 'assets/images/team/person3@2x.jpg';
import person3webp2x from 'assets/images/team/person3@2x.webp';

interface ISpecialist {
  name: string;
  surname: string;
  position: string;
  photos: { webp: string; webp2x: string; jpg: string; jpg2x: string };
}

const teamArr: ISpecialist[] = [
  {
    name: 'John',
    surname: 'Doe',
    position: 'President',
    photos: {
      webp: person1webp,
      webp2x: person1webp2x,
      jpg: person1jpg,
      jpg2x: person1jpg2x,
    },
  },
  {
    name: 'Jane',
    surname: 'Doe',
    position: 'Vice President',
    photos: {
      webp: person2webp,
      webp2x: person2webp2x,
      jpg: person2jpg,
      jpg2x: person2jpg2x,
    },
  },
  {
    name: 'Steve Smith',
    surname: 'Smith',
    position: 'Marketing Head',
    photos: {
      webp: person3webp,
      webp2x: person3webp2x,
      jpg: person3jpg,
      jpg2x: person3jpg2x,
    },
  },
];

const teamEntity = makeEntity(teamArr);
const TeamContext = createContext(teamEntity);
const useTeamContext = () => useContext(TeamContext);

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
    <ul>
      {team.ids.map(id => (
        <Specialist key={id} specialistId={id} />
      ))}
    </ul>
  );
};

export const Team = () => (
  <TeamSection id="team">
    <Container>
      <div>
        <h3>Who we are</h3>
        <h2>Our Professional Team</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
      </div>

      <TeamContext.Provider value={teamEntity}>
        <TeamList />
      </TeamContext.Provider>
    </Container>
  </TeamSection>
);
