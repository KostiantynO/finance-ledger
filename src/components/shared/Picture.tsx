import styled from 'styled-components';

interface PictureProps {
  webp: string;
  webp2: string;
  jpg: string;
  jpg2: string;
  alt: string;
  sizes: string;

  w: string;
  w2: string;
}

const PictureStyled = styled.picture`
  display: flex;

  img {
    object-fit: cover;
    object-position: top center;
    flex-grow: 1;
  }
`;

export const Picture = ({
  webp,
  webp2,
  jpg,
  jpg2,
  alt,
  sizes,
  w,
  w2,
}: PictureProps) => (
  <PictureStyled>
    <source
      sizes={sizes}
      srcSet={`${webp} ${w}, ${webp2} ${w2}`}
      type="image/webp"
    />

    <source
      sizes={sizes}
      srcSet={`${jpg} ${w}, ${jpg2} ${w2}`}
      type="image/jpg"
    />

    <img src={jpg} alt={alt} title={alt} />
  </PictureStyled>
);
