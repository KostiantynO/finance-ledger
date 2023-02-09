import { Route, Routes } from 'react-router-dom';
import { App } from 'App';
import { AttributionPage } from 'pages/AttributionPage';
import { BlogPage } from 'pages/BlogPage';
import { HomePage } from 'pages/HomePage';
import { NotFoundPage } from 'pages/NotFoundPage';

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="/attribution" element={<AttributionPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);
