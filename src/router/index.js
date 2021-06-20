import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LogIn from "../views/LogIn.vue";

 const router = createRouter({
  history: createWebHistory(),
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
