import { lazy } from 'react';
import { RouteType } from 'src/shared/models/routeModels';

const RoutesConfig: RouteType = {
  publicRoutes: [
    {
      path: '/',
      isPublic: true,
      component: lazy((): any => import('src/modules/home/Home')),
    },
  ],
  privateRoutes: [],
};
export default RoutesConfig;
