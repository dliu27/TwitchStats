import { createRouter, createWebHistory } from "vue-router";
import HomeView2 from "../views/HomeView2.vue";
import ProfileView from "../views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView2,
    },
    {
      path: "/profile/:username",
      name: "profileView",
      component: ProfileView,
    },
  ],
});

export default router;
