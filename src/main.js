import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDPDbsw82I4tSnpvrLnYe8JTK8df2gpHCI',
  authDomain: 'week7-zhiyuan.firebaseapp.com',
  projectId: 'week7-zhiyuan',
  storageBucket: 'week7-zhiyuan.appspot.com',
  messagingSenderId: '1063696208149',
  appId: '1:1063696208149:web:c06342b4ad6e602da9d91c'
}

initializeApp(firebaseConfig)

const app = createApp(App)
app.use(router)
app.mount('#app')
