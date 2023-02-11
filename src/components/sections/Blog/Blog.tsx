import { useNavigate } from 'react-router-dom';
import { routes } from 'common';
import { Button } from 'components/Button';
import { Heading } from 'components/Chat';
import { LevelContextProvider } from 'features/chat';
import { BlogContainer, BlogSection } from './Blog.styled';
import { BlogPhoto } from './BlogPhoto';

const { blog } = routes;

const GoToBlogButton = () => {
  const nav = useNavigate();

  const goToBlog = () => {
    nav(blog);
  };

  return <Button onClick={goToBlog}>Read Our Blog</Button>;
};

export const Blog = () => (
  <BlogSection id="blog">
    <LevelContextProvider>
      <BlogContainer>
        <div>
          <p className="smallText">April 16 2020</p>

          <Heading>Blog Post One</Heading>

          <p className="desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>

          <GoToBlogButton />
        </div>

        <BlogPhoto />
      </BlogContainer>
    </LevelContextProvider>
  </BlogSection>
);
