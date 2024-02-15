<template>
  <div>
    <TextInput />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TextInput from "@/components/TextInput.vue";

export default Vue.extend({
  name: "HomeView",
  components: {
    TextInput,
  },
});
</script>
