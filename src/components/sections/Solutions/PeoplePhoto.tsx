import { StyledPhoto } from './Solutions.styled';
import peopleJpgM from 'assets/images/home/mobile/solutions-people.jpg';
import peopleWebpM from 'assets/images/home/mobile/solutions-people.webp';
import peopleJpgM2px from 'assets/images/home/mobile/solutions-people@2x.jpg';
import peopleWebpM2x from 'assets/images/home/mobile/solutions-people@2x.webp';

// TODO: squuosh
import peopleJpgT from 'assets/images/home/people.jpg';
import peopleWebpT from 'assets/images/home/people.webp';
import peopleJpgT2x from 'assets/images/home/people@2x.jpg';
import peopleWebpT2x from 'assets/images/home/people@2x.webp';

export const PeoplePhoto = () => (
  <StyledPhoto>
    {/* Desktop */}
    <source
      media="(min-width: 1360px)"
      sizes="(min-width: 1360px) 670px, 50vw"
      srcSet={`${peopleWebpT} 1x, ${peopleWebpT2x} 2x`}
      type="image/webp"
    />

    <source
      media="(min-width: 1360px)"
      sizes="(min-width: 1360px) 670px, 50vw"
      srcSet={`${peopleJpgT} 1x, ${peopleJpgT2x} 2x`}
      type="image/jpg"
    />

    {/* Tablet */}
    <source
      media="(min-width: 768px)"
      sizes="(min-width: 768px) 364px, 50vw"
      srcSet={`${peopleWebpT} 1x, ${peopleWebpT2x} 2x`}
      type="image/webp"
    />

    <source
      media="(min-width: 768px)"
      sizes="(min-width: 768px) 364px, 50vw"
      srcSet={`${peopleJpgT} 1x, ${peopleJpgT2x} 2x`}
      type="image/jpg"
    />

    {/* Mobile */}
    <source
      media="(max-width: 767px)"
      sizes="100vw"
      srcSet={`${peopleWebpM} 1x, ${peopleWebpM2x} 2x`}
      type="image/webp"
    />

    <source
      media="(max-width: 767px)"
      sizes="100vw"
      srcSet={`${peopleJpgM} 1x, ${peopleJpgM2px} 2x`}
      type="image/jpg"
    />

    <img src={peopleJpgM} alt="professional team" />
  </StyledPhoto>
);
