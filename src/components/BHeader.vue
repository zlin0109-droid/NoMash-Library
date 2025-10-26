<template>
  <div class="container">
    <header class="flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link active">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link active">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/accessdenied" class="nav-link active">Access Denied</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/FireLogin" class="nav-link active">Firebase Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/FireRegister" class="nav-link active">Register</router-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<style scoped>
.container {
  background-color: #f8f9fa;
}
.nav-pills {
  display: flex;
  gap: 12px;
}
.nav-link {
  color: #007bff;
}
.nav-link:hover {
  color: #0056b3;
}
</style>
