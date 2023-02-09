import { StyledPhoto } from '../Solutions';
import jpgT2 from 'assets/images/blog/blog-1400w.jpg';
import webpT2 from 'assets/images/blog/blog-1400w.webp';
import jpgT from 'assets/images/blog/blog-700w.jpg';
import webpT from 'assets/images/blog/blog-700w.webp';

export const BlogPhoto = () => (
  <StyledPhoto>
    <source
      sizes="100vw"
      srcSet={`${webpT} 560w, ${webpT2} 1120w`}
      type="image/webp"
    />

    <source
      sizes="100vw"
      srcSet={`${jpgT} 560w, ${jpgT2} 1120w`}
      type="image/jpg"
    />
  </StyledPhoto>
);
