<!-- /products/:id -->

<template>
  <div>
    <!-- <p>Product Details for {{ id  }}</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est recusandae accusantium quaerat nam impedit quo temporibus quidem voluptas, laudantium quia rem repellendus architecto quisquam molestiae corrupti, hic corporis mollitia. Culpa, error fuga minus impedit distinctio odio facere amet veniam, doloribus dolor voluptatum tempore assumenda. Veniam non beatae debitis at quas!</p> -->
    <p>Product Title : {{product.title}}</p>
    <p>Product Price : {{product.price}}</p>
    <p>Product ID : {{product.id}}</p>
  </div>
</template>

<script setup>
definePageMeta({
  layout:'products' ,
})
const {id} =useRoute().params
const uri='https://fakestoreapi.com/products/' +id 

//fetch the product
const {data:product}=await useFetch(uri)
</script>

