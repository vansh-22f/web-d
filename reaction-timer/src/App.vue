<template>
  <div>
    <h1>Reaction timer ...</h1>
    <button @click="start" :disabled="isPlaying">Play</button>
    <block v-if="isPlaying" :delay="delay" @end="endGame" />
    <results v-if="showScore" :score="score"/>
  </div>
</template>

<script>
import block from "./components/block.vue";
import results from "./components/results.vue";
export default {
  name: "App",
  components: { block ,results},
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showScore: false,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showScore = false;
      console.log(this.delay);
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showScore = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
button{
    padding:10px 20px;
    font-size:18px;
    background: rgb(61, 190, 177);
    color:white;
    border:none;
    border-radius:10px;
    cursor:pointer;

}
button:disabled{
    background: rgb(61, 190, 177,0.5);
    cursor:not-allowed;
}
</style>
