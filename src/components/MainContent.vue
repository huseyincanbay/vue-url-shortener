<script>
import api from "../services/axios";

export default {
  name: "ShortenLink",
  data() {
    return {
      longUrl: "",
      shortUrl: "",
      error: null,
    };
  },
  methods: {
    async shortenLink() {
      try {
        const response = await api.post("", { long_url: this.longUrl });
        this.shortUrl = response.data.link;
      } catch (error) {
        console.error(error);
        this.error = "Bağlantı kısaltılamadı.";
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="form-container">
      <h1 class="favorilerim-title-1">Favoriler.im</h1>
      <h2 class="favorilerim-title-2">Favoriler.im</h2>
      <p class="description">
        Favoriler.im ile kolayca linklerinizi kısaltın ve para kazanın! Ücretsiz
        üye olun ve hemen başlayın.
      </p>
      <form class="link-form" @submit.prevent="shortenLink">
        <div class="form-group">
          <div class="input-container">
            <input
              type="text"
              class="form-control"
              v-model="longUrl"
              placeholder="URL'yi Yapıştır!"
            />
            <button class="btn btn-primary">Kısaltın</button>
          </div>
        </div>
      </form>

      <div class="result-container">
        <div v-if="shortUrl" class="result-success">
          <p>Kısaltılmış URL'niz:</p>
          <a :href="shortUrl" target="_blank">{{ shortUrl }}</a>
        </div>
        <div v-if="error" class="result-error">
          {{ error }}
        </div>
      </div>
    </div>
    <div class="photo-container">
      <img src="../assets/sag-taraf.png" alt="Your Photo" class="photo" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50vh;
  padding-top: 100px;
  padding-right: 400px;
  margin-bottom: 0;
}
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%; 
}
.favorilerim-title-1 {
  font-size: 3em;
  color: #6c63ff;
  width: 400px;
  text-align: left;
}
.favorilerim-title-2 {
  font-size: 5em;
  color: #6c63ff;
  width: 600px;
  text-align: center;
  margin-top: -45px;
}
.description {
  font-size: 1em;
  color: #6c63ff;
  width: 500px;
  margin-bottom: 50px;
  margin-top: -20px;
  text-align: center;
}

.link-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.form-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
  padding-bottom: 4em;
  width: 100%;
}
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input[type="text"] {
  border: 1px solid #ccc;
  border-width: 0.5px;
  border-radius: 20px;
  padding: 10px;
  width: 400px; 
  max-width: 100%;
  font-size: 1em;
  box-sizing: border-box;
  margin-bottom: 1em;
}

button.btn-primary {
  background-color: #6c63ff;
  color: #fff;
  font-size: 14px;
  border-radius: 25px;
  padding: 10px 10px;
  width: 400px; 
  max-width: 100%;
  cursor: pointer;
}

button.btn-primary:hover {
  background-color: #bb1ac1;
  transition: background-color 0.3s ease;
}

.result-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2em; 
}

.result-container > div {
  margin-top: -4em; 
}

.result-success {
  margin-bottom: 1em; 
}

.result-success p {
  font-weight: bold;
}

.result-success a {
  color: #6c63ff;
  text-decoration: none;
}

.result-error {
  color: #ff0000;
  font-weight: bold;
  margin-top: 1em; 
}

.photo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%; 
  padding-right: 10px; 
}
</style>
