import type { EntityId } from '@types';
import { makeEntity } from 'common/utils';
import { Section } from 'components/shared';
import { createContext, useContext } from 'react';

interface ISpecialist {
  name: string;
  surname: string;
  position: string;
}
const teamArr: ISpecialist[] = [
  { name: 'John', surname: 'Doe', position: 'President' },
  { name: 'Jane', surname: 'Doe', position: 'Vice President' },
  { name: 'Steve Smith', surname: 'Smith', position: 'Marketing Head' },
];
const teamEntity = makeEntity(teamArr);
const TeamContext = createContext(teamEntity);
const useTeamContext = () => useContext(TeamContext);

const Specialist = ({ specialistId }: { specialistId: EntityId }) => {
  const { name, surname, position } = useTeamContext().entities[specialistId];
  const fullName = `${name} ${surname}`;

  return (
    <li>
      <img src="specialist" alt={fullName} sizes="" srcSet="" />
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
  <Section>
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
  </Section>
);
