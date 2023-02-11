import type { ReactNode } from 'react';
import { HeadingStyled, Section } from 'components/shared';
import { useLevelContext } from 'features/chat';

export const Heading = ({ children }: { children: ReactNode }) => {
  const level = useLevelContext();

  switch (level) {
    case 0:
      throw Error('Heading must be inside a Section!');
    case 1:
      return <HeadingStyled>{children}</HeadingStyled>;
    case 2:
      return <HeadingStyled as="h2">{children}</HeadingStyled>;
    case 3:
      return <HeadingStyled as="h3">{children}</HeadingStyled>;
    case 4:
      return <HeadingStyled as="h4">{children}</HeadingStyled>;
    case 5:
      return <HeadingStyled as="h5">{children}</HeadingStyled>;
    case 6:
      return <HeadingStyled as="h6">{children}</HeadingStyled>;

    default:
      throw Error(`Unknown level: ${level}`);
  }
};

interface PostProps {
  title: string;
  children: ReactNode;
}

const Post = ({ title, children }: PostProps) => (
  <Section isFancy>
    <Heading>{title}</Heading>
    <p>
      <i>{children}</i>
    </p>
  </Section>
);

const RecentPosts = () => (
  <Section>
    <Heading>Recent Posts</Heading>
    <Post title="Flavors of Lisbon">...those pastéis de nata!</Post>
    <Post title="Buenos Aires in the rhythm of tango">I loved it!</Post>
  </Section>
);

const AllPosts = () => (
  <Section>
    <Heading>Posts</Heading>
    <RecentPosts />
  </Section>
);

export const Chat = () => (
  <Section>
    <Heading>My Profile</Heading>

    <Post title="Hello traveler!">Read about my adventures.</Post>

    <AllPosts />
  </Section>
);
