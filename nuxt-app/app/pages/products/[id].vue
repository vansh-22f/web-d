<!-- /products/:id -->

<template>
  <div>
    <!-- <p>Product Details for {{ id  }}</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est recusandae accusantium quaerat nam impedit quo temporibus quidem voluptas, laudantium quia rem repellendus architecto quisquam molestiae corrupti, hic corporis mollitia. Culpa, error fuga minus impedit distinctio odio facere amet veniam, doloribus dolor voluptatum tempore assumenda. Veniam non beatae debitis at quas!</p> -->
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
useHead({
  title: "Home Page",
  meta: [{ name: "description", content: "Welcome to homepage" }],
});

definePageMeta({
  layout: "products",
  pageTransition: {
    name: "rotate",
    mode: "out-in",
  },
  validate(route) {
    console.log("Testing");
    return /^\d+$/.test(route.params.id);
  },
});
const { id } = useRoute().params;
console.log(id);
const uri = "https://fakestoreapi.com/products/" + id;

//fetch the product
const { data: product } = await useFetch(uri);

if (!product.value) {
  throw createError({
    statusCode: 404,
    message: "Product Not Found",
    fatal: true,
  });
}
</script>
