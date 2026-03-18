<!-- <template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template> -->

<script setup lang="ts">
const counter = useState('counter', () => 0)
</script>

<template>
   <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <div>
    Counter: {{ counter }}<br>
    <button @click="counter++">
      +
    </button>
<br>
    <button @click="counter--">
      -
    </button>
  </div>
</template>



