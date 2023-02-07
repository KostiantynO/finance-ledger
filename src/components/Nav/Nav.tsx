import { linksEntity } from 'common';
import { useState } from 'react';
import { NavList, LinkStyled } from './Nav.styled';

export const Nav = () => {
  const [links] = useState(linksEntity);

  return (
    <nav>
      <NavList>
        {links.ids.map(id => {
          const link = links.entities[id];

          return (
            <li key={id}>
              <LinkStyled href={`#${link}`}>{link}</LinkStyled>
            </li>
          );
        })}
      </NavList>
    </nav>
  );
};
