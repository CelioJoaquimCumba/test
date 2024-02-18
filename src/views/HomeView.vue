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
      <ButtonComponent value="Click me" onclick="console.log('clicked')" />
      <ProgressBar :score="10" :total="100" />
      <OptionVue :index="1" :option="1" />
      <ScoreCardComponentVue :score="10" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ButtonComponent from "@/components/atoms/ButtonComponent.vue";
import ProgressBar from "@/components/atoms/ProgressBar.vue";
import OptionVue from "@/components/atoms/Option.vue";
import ScoreCardComponentVue from "@/components/molecules/ScoreCardComponent.vue";

export default Vue.extend({
  name: "HomeView",
  components: {
    ButtonComponent,
    ProgressBar,
    OptionVue,
    ScoreCardComponentVue,
  },
});
</script>
