import { useState } from 'react';
import { sizesCard } from 'App/theme';
import { makeEntity } from 'common/utils';
import { Picture } from 'components/shared';
import { CasesListStyled } from './Cases.styled';
import cases1jpg from 'assets/images/cases/cases1.jpg';
import cases1webp from 'assets/images/cases/cases1.webp';
import cases1jpg2x from 'assets/images/cases/cases1@2x.jpg';
import cases1webp2x from 'assets/images/cases/cases1@2x.webp';
import cases5jpg from 'assets/images/cases/cases2.jpg';
import cases5webp from 'assets/images/cases/cases2.webp';
import cases5jpg2x from 'assets/images/cases/cases2@2x.jpg';
import cases5webp2x from 'assets/images/cases/cases2@2x.webp';
import cases2jpg from 'assets/images/cases/cases3.jpg';
import cases2webp from 'assets/images/cases/cases3.webp';
import cases2jpg2x from 'assets/images/cases/cases3@2x.jpg';
import cases2webp2x from 'assets/images/cases/cases3@2x.webp';
import cases6jpg from 'assets/images/cases/cases4.jpg';
import cases6webp from 'assets/images/cases/cases4.webp';
import cases6jpg2x from 'assets/images/cases/cases4@2x.jpg';
import cases6webp2x from 'assets/images/cases/cases4@2x.webp';
import cases3jpg from 'assets/images/cases/cases5.jpg';
import cases3webp from 'assets/images/cases/cases5.webp';
import cases3jpg2x from 'assets/images/cases/cases5@2x.jpg';
import cases3webp2x from 'assets/images/cases/cases5@2x.webp';
import cases4jpg from 'assets/images/cases/cases7.jpg';
import cases4webp from 'assets/images/cases/cases7.webp';
import cases4jpg2x from 'assets/images/cases/cases7@2x.jpg';
import cases4webp2x from 'assets/images/cases/cases7@2x.webp';

interface Case {
  jpg: string;
  webp: string;
  jpg2x: string;
  webp2x: string;
  alt: string;
}

const casesArr: Case[] = [
  {
    jpg: cases1jpg,
    webp: cases1webp,
    jpg2x: cases1jpg2x,
    webp2x: cases1webp2x,
    alt: 'Two of the seven people shake hands at the table',
  },
  {
    jpg: cases2jpg,
    webp: cases2webp,
    jpg2x: cases2jpg2x,
    webp2x: cases2webp2x,
    alt: 'Man is writing notes from a laptop and a printed chart',
  },
  {
    jpg: cases3jpg,
    webp: cases3webp,
    jpg2x: cases3jpg2x,
    webp2x: cases3webp2x,
    alt: 'A man and a woman shake hands at the table',
  },
  {
    jpg: cases4jpg,
    webp: cases4webp,
    jpg2x: cases4jpg2x,
    webp2x: cases4webp2x,
    alt: 'Team members hold hands together over a table',
  },
  {
    jpg: cases5jpg,
    webp: cases5webp,
    jpg2x: cases5jpg2x,
    webp2x: cases5webp2x,
    alt: 'Woman works on a laptop',
  },
  {
    jpg: cases6jpg,
    webp: cases6webp,
    jpg2x: cases6jpg2x,
    webp2x: cases6webp2x,
    alt: 'Three glazed skyscrapers, view from below',
  },
];

const casesEntity = makeEntity(casesArr);

export const CasesList = () => {
  const [cases] = useState(casesEntity);

  return (
    <CasesListStyled>
      {cases.ids.map(id => {
        const { jpg, webp, jpg2x, webp2x, alt } = cases.entities[id];

        return (
          <li key={id}>
            <Picture
              alt={alt}
              jpg={jpg}
              jpg2={jpg2x}
              sizes={sizesCard}
              w="670w"
              w2="1340w"
              webp={webp}
              webp2={webp2x}
            />
          </li>
        );
      })}
    </CasesListStyled>
  );
};
