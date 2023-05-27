import { createRouter, createWebHistory } from "vue-router";
import Register from "../views/Register.vue";
import Signup from "../views/Signup.vue";
import HomePage from "../views/HomePage.vue";
import AdminDashboard from "../views/AdminDashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/dashboard",
      name: "AdminDashboard",
      component: AdminDashboard,
      meta: { hideHeader: true }, // Add meta field to hide header
    },
    {
      path: "/sign-up",
      name: "Signup",
      component: Signup,
      meta: { hideHeader: true }, // Add meta field to hide header
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      meta: { hideHeader: true }, // Add meta field to hide header
    },
  ],
});

export default router;
