<template>
  <div>
    <div v-if="job" class="jobs">
    <h1>{{ job.title }}</h1>
    <p>The job id is {{ id }}</p>
    <p>{{ job.company }}</p>
  </div>
  <div v-else>
    <h1>Loading Job details...</h1>
  </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then(console.log(this.id))
      .then((res) => {
        return res.json();
      })
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
