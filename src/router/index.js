import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/random",
    name: "random",
    // route level code-splitting
    // this generates a separate chunk (random.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "random" */ "../views/Random.vue")
  },
  {
    path: "/search",
    name: "search",
    // route level code-splitting
    // this generates a separate chunk (random.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/Search.vue")
  },
  {
    path: "/jokepage",
    name: "jokepage",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (random.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "JokePage" */ "../views/JokePage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
