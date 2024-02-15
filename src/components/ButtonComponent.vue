<template>
  <button
    class="flex flex-row items-center bg-background text-foreground justify-center border p-4 gap-4 rounded-md shadow-sm self-stretch text-base"
    :class="{
      'hover:shadow-md active:shadow-none':
        state !== 'loading' && state !== 'disabled',
      'cursor-not-allowed bg-gray-50 text-gray-400': state === 'disabled',
    }"
    @click="state !== 'loading' && state !== 'disabled' && onClick()"
  >
    {{ value }}
    <div
      v-if="state === 'loading'"
      class="w-6 h-6 rounded-full border-2 border-gray-200 border-t-black animate-spin"
    ></div>
  </button>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ButtonComponent",
  props: {
    value: String,
    onClick: {
      type: Function,
    },
    state: {
      type: String as () => "loading" | "disabled" | "default",
      default: "default",
    },
    variant: {
      type: String as () =>
        | "primary"
        | "secondary"
        | "tertiary"
        | "danger"
        | "success",
      default: "primary",
    },
  },
  methods: {
    handleClick() {
      this.onClick;
    },
  },
});
</script>
