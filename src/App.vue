<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
    <div class="container">
      <Header v-if="!$route.meta.hideHeader" />
      <RouterView />
    </div>
</template>

<style>
* {
  font-family: "Rubik", sans-serif;
  margin: 0;
  padding: 0;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
