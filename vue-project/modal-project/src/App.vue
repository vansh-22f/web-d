<template>
  <div>
    <h1>{{title}}</h1>
    <ModalBox/>
    <input type="text" ref="name">
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ModalBox from './components/ModalBox.vue'



export default {
  name: 'App',
 // eslint-disable-next-line
  components:{ModalBox},
  data(){
    return {
      title:'My first vue App'
    }
    
  },
  methods:{
      handleClick(){
        console.log(this.$refs.name)
        this.$refs.name.classlist.add('active')
        this.$refs.name.focus()
      }
    }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
