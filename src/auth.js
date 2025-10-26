import { ref } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

export const isAuthenticated = ref(false)
export const currentUser = ref(null)

const auth = getAuth()

onAuthStateChanged(auth, (user) => {
  if (user) {
    isAuthenticated.value = true
    currentUser.value = user
  } else {
    isAuthenticated.value = false
    currentUser.value = null
  }
})

export async function logout() {
  await signOut(auth)
  isAuthenticated.value = false
  currentUser.value = null
}
