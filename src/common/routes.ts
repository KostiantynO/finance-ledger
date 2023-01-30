import { makeEntity } from './utils';

export const routes = {
  root: '/',
};

const linksArr = ['home', 'about', 'cases', 'blog', 'contact'];

export const linksEntity = makeEntity(linksArr);
