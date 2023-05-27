<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="navbar">
    <div class="container">
      <div class="navbar-left">
        <img src="../assets/Logo.png" alt="Logo" />
      </div>
      <div class="navbar-center">
        <RouterLink to="/">Ev</RouterLink>
        <RouterLink to="/cozumler">Çözümler</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
      </div>
      <div class="navbar-right">
        <router-link to="/sign-up">
        <button>Oturum Aç</button>
        </router-link>
        <router-link to="/register">
          <button>Üye Ol</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 10px 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-bottom: 2px solid #ffc6c6;
}

.navbar-left img {
  height: 50px;
}

.navbar-center {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-center a {
  margin: 0 10px;
  font-size: 14px;
  color: #6c3eeb;
  text-decoration: none;
}

.navbar-center a:hover {
  color: #c926db;
}

.navbar-right {
  display: flex;
  align-items: center;
}

.navbar-right button {
  margin-left: 10px;
  padding: 10px 20px;
  font-size: 14px;
  color: #ffffff;
  background-color: #6c3eeb;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
}

.navbar-right button:hover {
  background-color: #bb1ac1;
  transition: background-color 0.3s ease;
}

@media screen and (max-width: 768px) {
  .container {
    padding: 10px;
    justify-content: flex-start;
  }
  .navbar-left img {
    height: 40px;
  }
  .navbar-center {
    display: none;
  }
  .navbar-right {
    flex-direction: column;
  }
  .navbar-right button {
    margin-left: 0;
    margin-top: 10px;
  }
}
</style>


