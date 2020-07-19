import Demo from '../views/demo';
import Detail from '../views/detial';
import NoFind from '../views/404';

export interface RouterBuildOptions {
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
  children?: RouterBuildOptions[];
}

const router: RouterBuildOptions[] = [
  {
    path: '/',
    component: Demo,
    exact: true,
  },
  {
    path: '/detail',
    component: Detail,
    children: [{
      path: '/detail/nofind',
      component: NoFind,
    }],
  },
];

export default router;
