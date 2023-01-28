import { Container, Section } from 'components/shared';

const GalleryImages = () => (
  <ul>
    <li>
      <img src="" alt="gallery 1" srcSet="" />
    </li>
    <li>
      <img src="" alt="gallery 2" srcSet="" />
    </li>
    <li>
      <img src="" alt="gallery 3" srcSet="" />
    </li>
  </ul>
);

export const Gallery = () => (
  <Section>
    <Container>
      <GalleryImages />
    </Container>
  </Section>
);
