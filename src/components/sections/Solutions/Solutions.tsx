import peopleJpg from 'assets/images/home/people.jpg';
import peopleJpg2x from 'assets/images/home/people@2x.jpg';
import { Container, FullWidth, Section } from 'components/shared';

const PeoplePhoto = () => (
  <FullWidth>
    <img
      src={peopleJpg}
      alt="professional team"
      sizes="100%"
      srcSet={`${peopleJpg}, ${peopleJpg2x} 2x`}
    />
  </FullWidth>
);

const SolutionsContent = () => (
  <div>
    <h3>What you are looking for</h3>

    <h2>We provide bespoke solutions</h2>

    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum
      dignissimos quae laudantium asperiores nam aliquid impedit harum illum
      dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores
      deleniti?
    </p>

    <button type="button">Read More</button>
  </div>
);

export const Solutions = () => (
  <Section>
    <PeoplePhoto />

    <Container>
      <SolutionsContent />
    </Container>
  </Section>
);
