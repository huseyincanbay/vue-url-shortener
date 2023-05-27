<script>
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import api from "../services/axios";

export default {
  name: "ShortenLink",
  data() {
    return {
      longUrl: "",
      shortUrl: "",
      error: null,
      db: null, // Add a reference to the Firestore database
    };
  },
  created() {
    this.db = getFirestore(); // Initialize the Firestore database
  },
  methods: {
    async shortenLink() {
      try {
        const response = await api.post("", { long_url: this.longUrl });
        const shortLink = response.data.link;

        // Get the user's IP address
        const ipAddress = await this.getUserIpAddress();

        const docRef = await addDoc(collection(this.db, "links"), {
          longUrl: this.longUrl,
          shortUrl: shortLink,
          createdAt: serverTimestamp(),
          ipAddress: ipAddress,
        });

        this.shortUrl = `${window.location.origin}/${docRef.id}`; // Generate short URL using document ID
      } catch (error) {
        console.error(error);
        this.error = "Bağlantı kısaltılamadı.";
      }
    },
    async getUserIpAddress() {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        return response.data.ip;
      } catch (error) {
        console.error("IP adresi alınamadı:", error);
        return null;
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="form-container">
      <h2 class="favorilerim-title-2">Favoriler.im</h2>
      <p class="description">
        Favoriler.im ile kolayca linklerinizi kısaltın ve para kazanın!
      </p>
      <form class="link-form" @submit.prevent="shortenLink">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            v-model="longUrl"
            placeholder="URL'yi Yapıştır!"
          />
          <button class="btn btn-primary">Kısaltın</button>
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
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center; /* Aligns containers to the left */
  align-items: center;
  height: 50vh;
  padding-top: 100px;
  margin-bottom: 0;
}
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  padding-top: 100px;
  margin-bottom: 0;
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

input[type="text"] {
  border: 1px solid #ccc;
  border-width: 0.5px;
  border-radius: 20px;
  padding: 10px;
  width: 400px; /* Adjust the width as desired */
  max-width: 100%;
  font-size: 1em;
  box-sizing: border-box;
  margin-bottom: 1em;
}

button.btn-primary {
  background-color: #6c63ff;
  color: #fff;
  font-size: 14px;
  border-radius: 20px;
  padding: 10px 20px;
  width: 400px; /* Adjust the width as desired */
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
</style>
