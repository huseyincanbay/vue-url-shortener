import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "<your-api-key>",
  authDomain: "<your-auth-domain>",
  projectId: "<your-project-id>",
  storageBucket: "<your-storage-bucket>",
  messagingSenderId: "<your-messaging-sender-id>",
  appId: "<your-app-id>",
  measurementId: "<your-measurement-id>",
};

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app");
