import { Navigate } from 'react-router-dom';

import { routes } from 'common/routes';

const { root } = routes;

const PageNotFound = () => <Navigate to={root} replace />;

export default PageNotFound;
