<template>
  <div class="flex flex-col items-start gap-1 self-stretch">
    <span v-if="label" class="text-base leading-6 font-normal text-gray-500">{{
      label
    }}</span>
    <ValidationProvider v-slot="{ errors }" :rules="rules" class="self-stretch">
      <div
        class="flex self-stretch border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:ring-0 focus:border-gray-400 text-base leading-6 font-normal justify-between"
        :class="{
          'ring-1 ring-red-500': errors[0] && submitted,
        }"
      >
        <input
          :name="label"
          v-bind="$attrs"
          class="flex flex-grow border-none ring-0 outline-none bg-white bg-opacity-0"
          :value="value"
          @input="$emit('input', $event.target?.value)"
          :type="!isPassword || showPassword ? 'text' : 'password'"
        />
        <button
          type="button"
          v-if="isPassword"
          class="text-base leading-6 font-normal hover:bg-gray-200 p-1 rounded-lg text-gray-500"
          @click="toggleShow"
        >
          {{ showPassword ? "Hide" : "Show" }}
        </button>
      </div>
      <span class="text-red-500 text-xs leading-4 font-normal">{{
        submitted ? errors[0] : ""
      }}</span>
    </ValidationProvider>
  </div>
</template>

<script lang="ts">
import { ValidationProvider } from "vee-validate";
import Vue from "vue";

export default Vue.extend({
  name: "inputComponent",
  data() {
    return {
      showPassword: false,
    };
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
  components: {
    ValidationProvider,
  },
  props: {
    label: String,
    value: String,
    isPassword: Boolean,
    rules: String,
    submitted: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
