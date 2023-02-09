import { useState } from 'react';
import { linksEntity } from 'common';
import { LinkStyled, NavList } from './Nav.styled';

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
