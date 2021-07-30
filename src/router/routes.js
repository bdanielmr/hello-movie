/* eslint-disable prettier/prettier */
import HomeSearchMovie from '../views/HomeSearchMovie/HomeSearchMovie';
import InfoPageSearchMovie from '../views/InfoPageSearchMovie/InfoPageSearchMovie';
import Error404 from '../views/Error404/Error404';
import SplashStartSearch from '../components/SplashStartSearch/SplashStartSearch';
export default [
  {
    name: 'SplashStartSearch',
    url: '/',
    path: '/',
    component: SplashStartSearch,
    exact: true,
  },
  {
    name: 'HomeSearchMovie',
    url: '/home',
    path: '/home',
    component: HomeSearchMovie,
    exact: true,
  },
  {
    name: 'InfoPageSearchMovie',
    url: '/movie',
    path: '/movie/:id',
    component: InfoPageSearchMovie,
    exact: true,
  },
  {
    name: 'Error404',
    url: '/',
    path: '/',
    component: Error404,
    exact: false,
  },
];
