<template>
  <div>
    
    <h1>About Page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi molestias impedit neque illum culpa veniam magnam cum ipsum debitis mollitia.
    </p>
    <div>
      <p>{{data}}</p>
    </div>
  </div>
</template>
<script setup>

  const {data}= await useFetch("/api/ninja?name=mario" ,{
    method:'post',
    body:{ age:30}
  })
</script>
<style scoped>
h1{
  color:grey;
}
p{
  color:blue;
}
</style>