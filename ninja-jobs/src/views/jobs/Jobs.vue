<template>
  <div class="jobs">
    <h1>Jobs</h1>
    <!-- <ul> -->
    <div v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
    <!-- </ul> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: []
    };
  },
  mounted(){
    fetch('http://localhost:3000/jobs')
    .then((res)=>{
        return res.json();
    })
    .then((data)=> this.jobs = data)
    .catch((err)=> console.log(err.message));
  }
};
</script>

<style scoped>
.jobs h2{
    background-color: rgb(216, 216, 216);
    color: #333;
    width: 600px;
    margin: 10px auto;
    padding: 10px;
    align-items: center;
    border-radius:7px;
}
.jobs h2:hover{
    background-color: rgb(189, 189, 189);
    color: #fff;
}
</style>
