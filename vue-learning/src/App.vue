<template>
  <div>
    <!-- <h1>Product Details</h1> -->
    <!-- <ProductCard title="Laptop" :price="50000">
      <p>This is a dummy laptop</p>
    </ProductCard>

    <ProductCard title="Phone" :price="20000">
      <p>This is dummy Phone</p>
    </ProductCard> -->
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
    </nav>
    <hr />

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
