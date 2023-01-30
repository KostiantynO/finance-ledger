import { Thumb } from './Picture.styled';

const sizesM = `100vw`;
const typeJpg = 'image/jpeg';
const typeWebp = 'image/webp';

interface PictureProps {
  webp: string;
  webp2x: string;
  jpg: string;
  jpg2x: string;
  alt: string;
}

export const Picture = ({ webp, webp2x, jpg, jpg2x, alt }: PictureProps) => {
  const mobileWebp = `${webp} 1x, ${webp2x} 2x`;

  const mobileJpg = `${jpg} 1x, ${jpg2x} 2x`;

  return (
    <Thumb>
      <picture>
        <source srcSet={mobileWebp} sizes={sizesM} type={typeWebp} />

        <source srcSet={mobileJpg} sizes={sizesM} type={typeJpg} />
        <img src={mobileJpg} alt={alt} />
      </picture>
    </Thumb>
  );
};

// format - (.jpg, .webp)
// geometry - art direction (portrait tall | landscape short)
// 1x, 2x - retina
// dark theme images
