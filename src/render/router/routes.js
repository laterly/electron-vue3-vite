import Home from '../views/Home.vue';
import Load from '../views/Load.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/load',
    name: 'Load',
    component: Load,
  },
  {
    path: '/list/:type',
    name: 'List',
    component: import('@/views/List.vue'),
  },
];
 export default routes;