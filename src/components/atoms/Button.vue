<template>
  <button
    class="flex justify-center items-center bg-green-600 py-2 rounded-2xl text-white font-semibold self-stretch hover:opacity-80 active:opacity-100"
    @click="handleClick"
  >
    <slot></slot>
    <div
      v-if="isLoading"
      class="animate-spin h-5 w-5 ml-2 rounded-full border-2 border-green-700 border-t-white"
    ></div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "buttonComponent",
  methods: {
    handleClick(this: any) {
      this.$emit("click");
    },
  },
  props: {
    isLoading: Boolean,
  },
});
</script>
