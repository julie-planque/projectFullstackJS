<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Top Movies <i class="bi bi-star"></i></router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/movies" class="nav-link">Movies 
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/remove" class="nav-link">Remove</router-link>
        </li>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "app"
};
</script>
