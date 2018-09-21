import React from 'react';
import Loadable from 'react-loadable';
import { Main } from '../components/Main';


const Loading = () => <div>Load...</div>;

const routes = [
  {
    component: Main,
    routes: [
      {
        path: '/',
        exact: true,
        component: Loadable({
          loader: () => import('../pages/Home'),
          loading: Loading,
        })
      },
      {
        path: '/about',
        component: Loadable({
          loader: () => import('../pages/about'),
          loading: Loading,
        })
      },
      {
        path: '*',
        component: Loadable({
          loader: () => import('../pages/NotFound'),
          loading: Loading,
        })
      }
    ]
  }
];

export default routes;
