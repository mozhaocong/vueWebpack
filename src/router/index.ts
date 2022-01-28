import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw,
} from "vue-router";

const Home = () => import(/* webpackChunkName: 'Home' */ "../views/Home.vue");
const About = () =>
  import(/* webpackChunkName: 'About' */ "../views/About.vue");
const Test = () => import(/* webpackChunkName: 'Test' */ "../views/Test.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    // component: () => import("../views/Home.vue"),
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import("../views/About.vue"),
    component: About,
  },
  {
    path: "/test",
    name: "Test",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import("../views/About.vue"),
    component: Test,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
