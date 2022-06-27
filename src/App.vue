<script setup>
import { RouterLink, RouterView } from 'vue-router'
import StoreNavigation from '@/components/StoreNavigation.vue'

</script>

<template>
  <StoreNavigation />
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Carrito</RouterLink>
        <RouterLink to="/login">Iniciar sesión</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style>

#app {
  /*font-weight: normal;*/
}

#user-msg {
  font-weight: bold;
  text-align: center;
}

button {
  cursor: pointer;
}

main {
  width: 80%;
  margin: 0 auto;
  min-height: 75vh;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  padding-bottom: 1rem;
}

a {
  text-decoration: none;
  color: var(--color-text);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

.wrapper {
  width: 100%;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 0.6rem;
}

nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

footer {
  width: 100%;
  text-align: center;
  padding: 1rem;
  color: white;
  margin-top: 1rem;
  background-color: hsla(160, 100%, 37%, 1);
}

@media (max-width: 1024px) {
  main {
    width: 95%;
  }
}
</style>

