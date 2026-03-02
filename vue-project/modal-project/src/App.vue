<template>
   <div>
    <h1>{{title}}</h1>
    <div v-if="showModal">
     
      <!-- <ModalBox header="Sign up click here" /> -->
      <!-- <vansh :header="header" :text="text" theme="sale" @close="toggleModal"/> -->
       <vansh theme="sale" @close="toggleModal">
        <h1>Hi Today is 2nd of March</h1>
        <p> The weather is pleasant today</p>


       </vansh>
      <!-- <input type="text" ref="name">
      <button @click="handleClick">click me</button> -->
    </div>
    <button @click="toggleModal">Open Modal</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import vansh from './components/ModalBox.vue'



export default {
  name: 'App',
 // eslint-disable-next-line
  components:{vansh,},
  data(){
    return {
      title:'My first vue App',
      header:'Sign up click here',
      text:'Hi hello bye',
      showModal:false
    }
    
  },
  methods:{
      // handleClick(){
      //   console.log(this.$refs.name)
      //   this.$refs.name.classlist.add('active')
      //   this.$refs.name.focus()
      // },
      toggleModal(){
        this.showModal=!this.showModal
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
