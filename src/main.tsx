import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { getRefs } from './common/utils/getRefs';

const { root } = getRefs();

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
