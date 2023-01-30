import { Routes, Route } from 'react-router-dom';
import { Attribution } from 'pages/Attribution';
import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { App } from 'App';

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/attribution" element={<Attribution />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
