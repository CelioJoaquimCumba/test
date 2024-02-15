<template>
  <button
    class="flex flex-row items-center justify-center border p-4 gap-4 rounded-md shadow-sm hover:shadow-md active:shadow-none self-stretch"
    @click="() => onClick()"
  >
    {{ value }}
    <div
      v-if="loading"
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
    loading: {
      type: Boolean,
    },
  },
  methods: {
    handleClick() {
      this.onClick;
    },
  },
});
</script>
