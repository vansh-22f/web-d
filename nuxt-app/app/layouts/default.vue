<template>
  <div>
    <header class="shadow-sm bg-white">
      
      <nav class="container mx-auto p-4 flex justify-between">
        <li><NuxtLink to="/" class="font-bold">Nuxt Link Test</NuxtLink></li>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <!-- Output the page -->
     <div class="container mx-auto p-4">
        <slot  />
    </div>
  </div>
</template>

<style scoped>
    .router-link-exact-active{
        color:green;
    }
</style>
