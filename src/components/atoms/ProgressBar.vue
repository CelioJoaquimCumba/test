<template>
  <div class="flex w-full bg-gray-300 rounded-lg">
    <div
      :style="{ width: percentage + '%' }"
      class="bg-green-600 h-1 rounded-lg"
    ></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "progressBarComponent",
  props: {
    score: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  computed: {
    percentage(this: { score: number; total: number }): number {
      return (this.score / this.total) * 100;
    },
    roundedPercentage(this: { percentage: number }): number {
      return Math.round(this.percentage);
    },
  },
});
</script>
