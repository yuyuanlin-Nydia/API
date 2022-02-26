import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import LogIn from "../views/LogIn.vue";

const router = createRouter({
  // with # on website URL
  // history: createWebHistory(),

  // for github page
  history:  createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        title: "Home",
      },
    },
    {
      path: "",
      name: "Home",
      component: Home,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/log-in",
      name: "LogIn",
      component: LogIn,
      meta: {
        title: "Log In",
      },
    },
  ],
});

export default router;
