interface PictureProps {
  webp: string;
  webp2x: string;
  jpg: string;
  jpg2x: string;
  alt: string;
}

export const Picture = ({ webp, webp2x, jpg, jpg2x, alt }: PictureProps) => (
  <picture>
    <source
      sizes="(min-width: 768px) 33vw, 100vw"
      srcSet={`${webp} 1x, ${webp2x} 2x`}
      type="image/webp"
    />

    <source
      sizes="(min-width: 768px) 33vw, 100vw"
      srcSet={`${jpg} 1x, ${jpg2x} 2x`}
      type="image/jpg"
    />

    <img src={jpg} alt={alt} title={alt} />
  </picture>
);
