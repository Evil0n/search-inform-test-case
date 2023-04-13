<template>
  <index-page />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IndexPage from "@/pages/IndexPage.vue";

export default defineComponent({
  name: 'App',
  components: {
      IndexPage,
  }
});
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html, body {
    margin: 0;
    padding: 0;
}
</style>
