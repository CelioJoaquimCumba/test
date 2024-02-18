<template>
  <div class="flex flex-col w-full h-screen items-center justify-center">
    <div
      class="flex flex-col w-1/2 h-1/2 items-center justify-center shadow-md p-8"
    >
      <ButtonComponent value="Click me" onclick="console.log('clicked')" />
      <ProgressBar :score="10" :total="100" />
      <OptionVue :index="1" :option="1" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ButtonComponent from "@/components/atoms/ButtonComponent.vue";
import ProgressBar from "@/components/atoms/ProgressBar.vue";
import OptionVue from "@/components/atoms/Option.vue";

export default Vue.extend({
  name: "HomeView",
  components: {
    ButtonComponent,
    ProgressBar,
    OptionVue,
  },
});
</script>
