<template>
  <button
    class="flex flex-row rounded-lg gap-2 px-1 py-2 items-center justify-start self-stretch"
    :class="{
      'bg-red-300': state === 'incorrect',
      'bg-green-300': state === 'correct',
      'bg-gray-200': state === 'default',
      'hover:opacity-80 active:opacity-100 bg-gray-200': !disabled,
      'cursor-not-allowed': disabled,
      'bg-gray-400': selected,
    }"
    @click="handleClick"
  >
    <div class="flex rounded-lg px-4 py-2 gap-2 bg-white">
      {{ index }}
    </div>
    <span class="text-base leading-6 font-normal">
      {{ option }}
    </span>
  </button>
</template>

<script lang="ts">
import Vue from "vue";
type state = "correct" | "incorrect" | "default";

export default Vue.extend({
  name: "optionComponent",
  props: {
    option: {
      type: String,
      required: true,
    },
    index: {
      type: String,
      required: true,
    },
    state: {
      type: String as () => state,
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(this: Vue): void {
      this.$emit("click");
    },
  },
});
</script>
