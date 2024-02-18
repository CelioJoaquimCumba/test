import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
// import QuizView from "../views/QuizView.vue";

// import ResultView from "@/views/ResultView.vue";
import LoginView from "@/views/LoginView.vue";
// import RegisterView from "@/views/RegisterView.vue";

import store from "../store";
import { getUser } from "@/utils/userManager";
import { validateToken } from "@/api/Auth";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    // {
    //   path: "/quiz",
    //   name: "quiz",
    //   component: QuizView,
    // },
    // {
    //   path: "/result/:score",
    //   name: "result",
    //   component: ResultView,
    // },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    // {
    //   path: "/register",
    //   name: "register",
    //   component: RegisterView,
    // },
  ],
});

const validateRefreshToken = async (refreshToken: string): Promise<boolean> => {
  return false;
};
const refreshTokenValue = async (
  refreshToken: string
): Promise<{ token: string }> => {
  return { token: "token-value" };
};

router.beforeEach(async (to, from, next) => {
  const user = getUser();

  // If no user or user is null, proceed to the next route
  if (!user || user === null) {
    // Redirect to login if not on login or register page
    if (to.name !== "login" && to.name !== "register") {
      next({ name: "login" });
    } else {
      next();
    }
    return;
  }

  const { token, refreshToken } = user;

  // Update the store with the user
  store.commit("setUser", user);

  // Redirect to login if there's no token
  if (!token) {
    next({ name: "login" });
    return;
  }

  let isTokenValid = false;

  try {
    isTokenValid = await validateToken(token);
  } catch (e) {
    console.log("not valid my g");
    isTokenValid = false;
  }

  // If token is not valid and there's a refreshToken, try to refresh
  if (!isTokenValid && refreshToken) {
    const isRefreshTokenValid = await validateRefreshToken(refreshToken);

    if (isRefreshTokenValid) {
      const { token: newToken } = await refreshTokenValue(refreshToken);
      store.commit("setUser", {
        ...user,
        token: newToken,
      });

      // Token refreshed, continue to the next route
      next();
      return;
    }
  }

  // Redirect to login if not on login or register page and token is not valid
  if (to.name !== "login" && to.name !== "register" && !isTokenValid) {
    next({ name: "login" });
  }

  // Redirect to home if trying to access login or register while the token is valid
  if ((to.name === "login" || to.name === "register") && isTokenValid) {
    next({ name: "home" });
  }

  // Proceed to the next route
  next();
});

export default router;
