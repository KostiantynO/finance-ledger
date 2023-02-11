import { StyledPhoto } from '../Solutions';
import jpgT2 from 'assets/images/blog/blog-1400w.jpg';
import webpT2 from 'assets/images/blog/blog-1400w.webp';
import jpgT from 'assets/images/blog/blog-700w.jpg';
import webpT from 'assets/images/blog/blog-700w.webp';

const sizes = '(min-width: 768px) 50vw, 100vw';

export const BlogPhoto = () => (
  <StyledPhoto>
    {/* Tablet */}
    <source
      sizes={sizes}
      srcSet={`${webpT} 1x, ${webpT2} 2x`}
      type="image/webp"
    />

    <source sizes={sizes} srcSet={`${jpgT} 1x, ${jpgT2} 2x`} type="image/jpg" />

    <img
      src={jpgT}
      alt="tablet, 2 closed notepads and one opened, pencil and tea cup with spoon"
    />
  </StyledPhoto>
);
