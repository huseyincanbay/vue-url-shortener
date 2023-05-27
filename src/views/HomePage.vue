<script>
import MainContent from '../components/MainContent.vue';

export default {
  name: "HomePage",
  components: {
    MainContent,
  },
};
</script>

<template>
  <div class="home-page">
    <MainContent />
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
