import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useUpdateTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!document) return;

    const path =
      !pathname || pathname === '/'
        ? 'FinanceLedger'
        : pathname.replace('/', '');

    document.title = path[0].toUpperCase() + path.slice(1);
  }, [pathname]);
};
