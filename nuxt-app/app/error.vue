<template>
    <div >
        <p>{{ error.statusCode }}</p>
        <p>OOPS... Something went wrong</p>
        <p>{{ error.message }}</p>

        <button  @click="handleClearError" class="custom-btn">Go back</button>
    </div>
</template>

<script setup >
defineProps(['error'])

const handleClearError=()=>clearError({redirect:'/'})
</script>

<style scoped>
.custom-btn{
    color:white;
    background-color:green;
}
</style>