<script setup>

import ProductCard from "../components/ProductCard.vue"
import { useProducts } from "../composables/useProducts"

const { search, sortType, filteredProducts } = useProducts()

</script>


<template>
  <div>
    <input v-model="search" />
    <h1>Products</h1>
    <br /><br />
    <select v-model="sortType">
      <option value="default">Default</option>
      <option value="low">Low</option>
      <option value="high">High</option>
    </select>
    <br /><br />

    <ProductCard
      v-for="product in filteredProducts"
      :key="product.id"
      :title="product.title"
      :price="product.price"
    >
      <p>click to view details</p>
      <router-link :to="`products/${product.id}`">View Product</router-link>
    </ProductCard>
  </div>
</template>
