import type { User } from "@/models/UserModel";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface State {
  user: User | null;
}

export default new Vuex.Store({
  state(): State {
    return {
      user: null,
    };
  },
  mutations: {
    setUser(state: State, user: User | null) {
      state.user = user;
    },
  },
});
