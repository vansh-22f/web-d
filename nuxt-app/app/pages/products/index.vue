<template>
  <div class="grid grid-cols-4 gap-5">
    <div v-for="p in products" :key="p.id">
      <ProductCard :product="p">
        
      </ProductCard>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

// Fetch the prodcuts and pass it to the layout
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped>
h1 {
  color: red;
}
</style>
