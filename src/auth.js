import { ref } from 'vue'

export const isAuthenticated = ref(false)

const USER = 'admin'
const PASS = 'Password123!'

export function login(username, password) {
  if (username === USER && password === PASS) {
    isAuthenticated.value = true
    return true
  }
  return false
}

export function logout() {
  isAuthenticated.value = false
}
