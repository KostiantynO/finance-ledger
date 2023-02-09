import { Link } from 'react-router-dom';
import { routes } from 'common';
import { Container, Section } from 'components/shared';
import { BlogPhoto } from './BlogPhoto';

const { blog } = routes;

export const Blog = () => (
  <Section id="blog">
    <Container>
      <div>
        <time>April 16 2020</time>

        <h2>Blog Post One</h2>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>

        <Link to={blog}>Read Our Blog</Link>
      </div>

      <BlogPhoto />
    </Container>
  </Section>
);
