import { makeEntity } from './utils';

export const routes = {
  root: '/',
  blog: '/blog',
};

const linksArr = ['home', 'about', 'cases', 'blog', 'contact'];

export const linksEntity = makeEntity(linksArr);
