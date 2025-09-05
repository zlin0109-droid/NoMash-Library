<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { login } from '../auth'

const route = useRoute()
const router = useRouter()

const username = ref('')
const password = ref('')
const error = ref('')

const onSubmit = () => {
  error.value = ''
  if (login(username.value.trim(), password.value)) {
    router.push(route.query.redirect || '/about')
  } else {
    error.value = 'Invalid username or password.'
  }
}
</script>

<template>
  <div class="container py-5" style="max-width:480px">
    <h2 class="mb-3 text-center">Member Login</h2>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="u" class="form-label">Username</label>
        <input id="u" v-model="username" class="form-control" autocomplete="username" />
      </div>
      <div class="mb-3">
        <label for="p" class="form-label">Password</label>
        <input id="p" type="password" v-model="password" class="form-control" autocomplete="current-password" />
      </div>
      <div v-if="error" class="text-danger mb-2">{{ error }}</div>
      <button type="submit" class="btn btn-primary w-100">Login</button>
    </form>
  </div>
</template>
