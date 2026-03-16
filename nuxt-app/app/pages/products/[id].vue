<!-- /products/:id -->

<template>
  <div>
    <p>Product Details for {{ id  }}</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est recusandae accusantium quaerat nam impedit quo temporibus quidem voluptas, laudantium quia rem repellendus architecto quisquam molestiae corrupti, hic corporis mollitia. Culpa, error fuga minus impedit distinctio odio facere amet veniam, doloribus dolor voluptatum tempore assumenda. Veniam non beatae debitis at quas!</p>
  </div>
</template>

<script setup>

const {id} =useRoute().params

</script>
