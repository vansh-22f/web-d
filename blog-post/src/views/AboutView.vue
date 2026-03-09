<template>
  <div class="about">
    <h1>About</h1>

    <PostList :posts="posts" />

  </div>
</template>

<script>
import {ref } from 'vue'
import PostList from '../components/PostList.vue'
export default{
  name:'AboutView',

  components:{PostList},

  setup(){
    const posts=ref([
      {id:1,title:"Post 1",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
      {id:2,title:"Post 2",body:"This is the content of post 2"},
      {id:3,title:"Post 3",body:"This is the content of post 3"},
    ]);


  

    return {posts}
  }
}






</script>