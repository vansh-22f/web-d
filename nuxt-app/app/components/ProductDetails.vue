<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
        <div class="p-7">
            <img :src="product.image" alt="product image" class="mx-auto my-7" />
        </div>
        <div class="p-7">
            <h1 class="text-2xl font-bold mb-4">{{product.title}}</h1>
            <p class="text-gray-500 mb-4">{{product.description}}</p>
            <p class="text-xl font-bold text-green-600 mb-4">${{product.price}}</p>
            <button class="btn">Add to Cart</button>
        </div>
    </div>
  </div>
</template>

<script setup>
    const {product}=defineProps(['product'])
</script>

<style scoped>


</style>