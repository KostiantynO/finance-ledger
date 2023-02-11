import { useNavigate } from 'react-router-dom';
import { routes } from 'common';
import { ButtonOutlined } from 'components/Button';
import { Heading } from 'components/Chat';
import { LevelContextProvider } from 'features/chat';
import { BlogContainer, BlogContentStyled, BlogSection } from './Blog.styled';
import { BlogPhoto } from './BlogPhoto';

const { blog } = routes;

const GoToBlogButton = () => {
  const nav = useNavigate();

  const goToBlog = () => {
    nav(blog);
  };

  return <ButtonOutlined onClick={goToBlog}>Read Our Blog</ButtonOutlined>;
};

const BlogContent = () => (
  <BlogContentStyled>
    <p className="smallText">April 16 2020</p>

    <LevelContextProvider>
      <Heading>Blog Post One</Heading>
    </LevelContextProvider>

    <p className="desc">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum
      dignissimos quae laudantium asperiores nam aliquid impedit harum illum
      dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores
      deleniti?
    </p>

    <GoToBlogButton />
  </BlogContentStyled>
);

export const Blog = () => (
  <BlogSection id="blog">
    <BlogContainer padding="0">
      <BlogContent />

      <BlogPhoto />
    </BlogContainer>
  </BlogSection>
);
