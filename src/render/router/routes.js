import Home from '../views/Home.vue';
// 别名必须以 / 开头、结尾
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/list/:type',
    name: 'List',
    component: import('/@/views/List.vue'),
  },
];
 export default routes;