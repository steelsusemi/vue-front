import { createWebHistory, createRouter } from "vue-router";
// import List from '../components/views/List.vue';
import Home from '../components/views/home.vue';
import Detail from '../components/views/detail.vue';
import About from '../components/views/about.vue';

const routes = [
  {
    path: "/",
    component: Home,
  },
//   {
//     path: "/list",
//     component: List,
//   },
  {
    path: "/detail",
    component: Detail,
  },
  {
    path: "/about",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 