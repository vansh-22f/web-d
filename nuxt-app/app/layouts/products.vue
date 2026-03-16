<template>
  <div>
    <header>
      <li><NuxtLink to="/products">Madewith help of custom layout</NuxtLink></li>
      <nav></nav>
    </header>
    <!-- Output the page -->
    <div>
      <slot />
    </div>
    <footer>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/products">Products</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
    </ul>
    </footer>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: rgb(241, 245, 3);
}
</style>
