<template>
  <div>
    <header>
      <li><NuxtLink to="/">Nuxt Link Test</NuxtLink></li>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <!-- Output the page -->
     <div>
        <slot  />
    </div>
  </div>
</template>

<style scoped>
    .router-link-exact-active{
        color:green;
    }
</style>
