<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between items-center">
        <li>
          <NuxtLink to="/products" class="font-bold">Made with custom products layout</NuxtLink>
        </li>
      </nav>
    </header>
    <!-- Output the page -->
    <div class="container mx-auto p-4">
      <slot />
    </div>
    <footer class="border-t bg-slate-50">
      <ul class="container mx-auto p-4 flex gap-4">
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
