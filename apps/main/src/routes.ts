import { IRouterConfig } from 'ice';
import Home from '@/pages/Home';
import NotFound from '@/components/NotFound';

const routes: IRouterConfig[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    component: NotFound,
  },
];

export default routes;
