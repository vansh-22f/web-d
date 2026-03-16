<template>
  <div>
    <header>
      <li><NuxtLink>Nuxt Link Test</NuxtLink></li>
      <nav>
        <ul>
          <li ><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
        <a href="/">Anchor Link</a>
      </nav>
    </header>
    <h1>About Page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi molestias impedit neque illum culpa veniam magnam cum ipsum debitis mollitia.
    </p>
  </div>
</template>

<style scoped>
h1{
  color:grey;
}
p{
  color:blue;
}
</style>