import webpT from 'assets/images/blog/blog-700w.webp';
import webpT2 from 'assets/images/blog/blog-1400w.webp';
import jpgT from 'assets/images/blog/blog-700w.jpg';
import jpgT2 from 'assets/images/blog/blog-1400w.jpg';
import { StyledPhoto } from '../Solutions';

// import { theme } from 'App/theme';
// const media = {
//   tablet: `(min-width: ${theme.bp.tablet})`,
//   mobile: `(max-width: ${theme.bp.preTablet})`,
// };

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
