<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <p>Price: ${{ price }}</p>
    <div>
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        title:String,
        price:Number
    }
}
</script>

<style>
.card{
    border:1px solid #ccc;
    padding:20px;
    border-radius:5px;
    width:300px;
    margin:20px auto;
}
</style>