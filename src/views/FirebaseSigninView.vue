<template>
  <div class="container">
    <div class="login-box">
      <h1>Firebase Sign In</h1>

      <div v-if="!user">
        <p><input type="text" v-model="email" placeholder="Email" /></p>
        <p><input type="password" v-model="password" placeholder="Password" /></p>
        <p><button @click="login">Login</button></p>
      </div>

      <div v-else>
        <h2>Welcome, {{ user.email }}</h2>
        <button @click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"

const email = ref("")
const password = ref("")
const user = ref(null)
const auth = getAuth()

const login = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      user.value = userCredential.user
      alert("Login successful!")
    })
    .catch((error) => {
      alert("Login failed: " + error.message)
    })
}

const logout = () => {
  signOut(auth)
    .then(() => {
      user.value = null
      alert("You have logged out.")
    })
    .catch((error) => {
      alert("Logout failed: " + error.message)
    })
}

onMounted(() => {
  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser
  })
})
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
