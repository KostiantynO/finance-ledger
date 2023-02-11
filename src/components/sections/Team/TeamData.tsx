import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';
import { makeEntity } from 'common/utils';

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

export const teamEntity = makeEntity(teamArr);
const TeamContext = createContext(teamEntity);
export const useTeamContext = () => useContext(TeamContext);

export const TeamContextProvider = ({ children }: { children: ReactNode }) => {
  const [team] = useState(teamEntity);

  return <TeamContext.Provider value={team}>{children}</TeamContext.Provider>;
};
