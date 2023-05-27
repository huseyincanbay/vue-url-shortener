<script>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const register = () => {
      createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
          console.log("Successfully Registered!");
          router.push("/dashboard"); // Redirect to the login page after register
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });
    };

    const moveToLogin = () => {
      router.push('/sign-up')   
    };

    const closeAlert = () => {
      
    };

    return {
      email,
      password,
      register,
      moveToLogin,
      closeAlert,
    };
  },
};
</script>

<template>
  <div class="container">
    <form @submit.prevent="register">
      <h2 class="mb-3">Kayıt Ol</h2>
      <div class="input">
        <label for="email">E-posta adresi:</label>
        <input
          class="form-control"
          type="text"
          v-model="email"
          placeholder="E-posta adresinizi giriniz.."
        />
      </div>
      <div class="input">
        <label for="password">Şifre</label>
        <input
          class="form-control"
          type="password"
          v-model="password"
          placeholder="Şifrenizi giriniz.."
        />
      </div>

      <div class="alternative-option mt-4">
        Hesabın var mı? <span @click="moveToLogin">Giriş yap</span>
      </div>

      <button type="submit" class="mt-4 btn-pers">Kayıt ol</button>
      <div
        class="alert alert-warning alert-dismissible fade show mt-5"
        role="alert"
        v-if="showAlert"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          @click="closeAlert"
        ></button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

form {
  width: 300px;
  padding: 50px;
  background-color: #f1e0e0;
  border-radius: 1px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

h2 {
  text-align: center;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.input {
  margin-bottom: 15px;
  margin-right: 25px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: #f8f8f8;
  font-size: 14px;
  color: #333;
  transition: border-color 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #6c63ff;
}

.alternative-option {
  text-align: center;
  margin-bottom: 10px;
}

.alternative-option span {
  color: blue;
  cursor: pointer;
}

.btn-pers {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #6c3eeb;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}
.btn-pers:hover {
  background-color: #c331e8;
}

.alert {
  margin-top: 20px;
  padding: 15px;
  border-radius: 3px;
}
</style>
