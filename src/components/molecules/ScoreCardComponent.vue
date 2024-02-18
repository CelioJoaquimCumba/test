<template>
  <div
    class="flex bg-gray-100 rounded-lg sm:w-1/2 w-full aspect-square items-center justify-center"
  >
    <span class="text-2xl leading-8 font-extrabold text-green-600">{{
      score
    }}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "scoreCardComponent",
  props: {
    score: {
      type: Number,
      required: true,
    },
  },
});
</script>
