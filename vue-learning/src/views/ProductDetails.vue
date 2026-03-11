<script>
export default {
  data() {
    return {
      products: [
        { id: 1, title: "Laptop", price: 50000 },
        { id: 2, title: "Phone", price: 20000 },
        { id: 3, title: "Tablet", price: 30000 },
      ],
    };
  },

  computed: {
    product() {
      const id = this.$route.params.id;

      return this.products.find((p) => p.id == id);
    },
  },
};
</script>

<template>
  <div v-if="product">
    <h1>{{ product.title }}</h1>

    <p>Price: ₹{{ product.price }}</p>

    <p>This is the product detail page</p>
  </div>
</template>
