<script lang="ts">
import buttonComponent from "../components/atoms/Button.vue";
export default {
  name: "HomeView",
  components: {
    buttonComponent,
  },
};
</script>

<template>
  <div
    class="flex w-full h-screen bg-gray-200 justify-center items-center gap-4"
  >
    <div
      class="flex flex-col w-full sm:w-auto sm:aspect-[3/2] h-full sm:h-1/2 px-24 justify-center items-center bg-white rounded-2xl"
    >
      <div
        class="flex flex-col w-full justify-center items-center max-w-xs gap-8"
      >
        <span class="text-3xl leading-10 font-normal text-black">QUIZ APP</span>
        <buttonComponent @click="$router.push('/quiz')"
          >Start Quiz</buttonComponent
        >
      </div>
    </div>
  </div>
</template>
