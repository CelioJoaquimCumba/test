<template>
  <input v-model="inputValue" :placeholder="placeholder" class="input" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Vue from "vue";

export default Vue.extend({
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      default: "Digite um texto",
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
});
</script>
