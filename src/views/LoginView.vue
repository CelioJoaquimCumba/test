<script lang="ts">
import buttonComponent from "../components/atoms/Button.vue";
import inputComponent from "../components/atoms/InputComponent.vue";
import { ValidationObserver } from "vee-validate";
import "../validations/vee-validate-extensions";
import { login } from "../api/Auth";
import store from "../store";
import { setUser } from "../utils/userManager";
import { RouterLink } from "vue-router";
import Vue from "vue";
export default Vue.extend({
  name: "LoginView",
  data() {
    return {
      emailInput: "",
      passwordInput: "",
      submitted: false,
      errorMessage: "",
      isLoading: false,
    };
  },
  components: {
    buttonComponent,
    inputComponent,
    ValidationObserver,
  },
  methods: {
    async submitForm() {
      try {
        this.isLoading = true;
        const { token, refreshToken, id } = await login(
          this.emailInput,
          this.passwordInput
        );
        this.errorMessage = "";
        console.log(token, refreshToken, this.emailInput, id);
        setUser({ email: this.emailInput, token, refreshToken, id });
        this.$router.push({ name: "home" });
      } catch (error: any) {
        console.log(error);
        if (error && error.response && error.response.data) {
          this.errorMessage = error?.response?.data?.message;
        } else {
          this.errorMessage = "error occurred";
        }
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
    changeSubmitState() {
      this.submitted = true;
    },
  },
});
</script>

<template>
  <div
    class="flex w-full h-screen bg-gray-200 justify-center items-center gap-4"
  >
    <div
      class="flex flex-col px-8 lg:px-24 w-full sm:w-1/2 h-full sm:h-3/4 justify-center items-center bg-white rounded-2xl"
    >
      <ValidationObserver v-slot="{ handleSubmit }">
        <form
          class="flex flex-col w-full max-w-md sm:max-w-sm gap-2"
          @submit.prevent="handleSubmit(submitForm)"
        >
          <span class="text-xl leading-7 font-normal">Login</span>
          <span class="text-base leading-6 font-normal"
            >Insert your credentials to access your account</span
          >
          <inputComponent
            label="Email"
            placeholder="Insert your email"
            v-model="emailInput"
            :rules="'required|email'"
            :submitted="submitted"
          />
          <inputComponent
            label="Password"
            placeholder="Insert your password"
            is-password
            v-model="passwordInput"
            :rules="'password|required'"
            :submitted="submitted"
          />
          <buttonComponent
            type="submit"
            @click="changeSubmitState"
            :is-loading="isLoading"
            >Login</buttonComponent
          >
          <span
            class="text-red-500 text-sm leading-4 font-normal text-center"
            >{{ errorMessage }}</span
          >
        </form>
        <div
          class="flex gap-2 text-base leading-6 font-normal self-stretch justify-center"
        >
          <span>Don't have an account?</span>
          <router-link to="./register" class="text-green-600"
            >Register</router-link
          >
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>
