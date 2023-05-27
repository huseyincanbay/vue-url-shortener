<script>
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";
import { ref } from "vue";
import DashboardContent from "../components/DashboardContent.vue";
import DashboardFetchedLinks from "../components/DashboardFetchedLinks.vue";

export default {
  components: {
    DashboardContent,
    DashboardFetchedLinks,
},
  setup() {
    const router = useRouter();
    const user = ref(null);

    // Check if the user is logged in
    onAuthStateChanged(getAuth(), (loggedInUser) => {
      if (loggedInUser) {
        user.value = loggedInUser;
      } else {
        user.value = null;
      }
    });

    const logout = () => {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          console.log("Successfully logged out");
          router.push("/"); // Redirect to the login page after logout
        })
        .catch((error) => {
          console.log("Logout error:", error);
        });
    };

    return {
      user,
      logout,
    };
  },
};
</script>

<template>
  <div class="admin-dashboard">
    <header>
      <div class="logo-section">
        <img src="../assets/Vue_Logo.png" alt="Logo" />
      </div>
      <div class="user-info">
        <div v-if="user" class="user-name">Hesabın: {{ user.email }}</div>
        <button v-if="user" @click="logout">Çıkış Yap</button>
      </div>
    </header>
    <div class="home-page">
      <DashboardContent />
      <DashboardFetchedLinks />
    </div>
  </div>
</template>

<style scoped>
/* Overall admin dashboard container */
.admin-dashboard {
  font-family: Arial, sans-serif;
}

/* Header section */
header {
  padding: 10px 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-bottom: 2px solid #ffc6c6;
}

/* Logo section */
.logo-section img {
  height: 50px;
}

/* User info */
.user-info {
  display: flex;
  align-items: center;
}

.user-name {
  margin: 0 10px;
  font-size: 14px;
  color: #6c3eeb;
  text-decoration: none;
}

/* Logout button */
button {
  padding: 10px 20px;
  margin-left: 15px;
  font-size: 13px;
  background-color: #dc3535;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #6c63ff;
  transition: background-color 0.3s ease;
}

@media (max-width: 768px) {
  /* Responsive styles for screens with a maximum width of 768px */
  header {
    flex-direction: column;
    align-items: flex-start;
  }

  .logo-section img {
    height: 40px;
    margin-bottom: 10px;
  }

  .user-info {
    margin-top: 10px;
  }
}
</style>
