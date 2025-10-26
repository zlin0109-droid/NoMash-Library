<template>
  <div class="container">
    <div class="login-box">
      <h1>Create an Account</h1>

      <div v-if="!registered">
        <p><input type="text" v-model="email" placeholder="Email" /></p>
        <p><input type="password" v-model="password" placeholder="Password" /></p>
        <p><button @click="register">Register</button></p>
      </div>

      <div v-else>
        <h2>Register Successful!</h2>
        <button @click="goToLogin">Go to Login</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "vue-router"

const email = ref("")
const password = ref("")
const registered = ref(false)
const router = useRouter()
const auth = getAuth()

const register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      registered.value = true
      console.log("Register successful!")
    })
    .catch((error) => {
      alert("Error: " + error.message)
    })
}

const goToLogin = () => {
  router.push("/FireLogin")
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.login-box {
  text-align: center;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  background-color: white;
}
.login-box input {
  width: 80%;
  padding: 8px;
  margin: 6px 0;
}
button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
