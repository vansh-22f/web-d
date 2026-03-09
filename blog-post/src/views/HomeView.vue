<template>
  <div class="home">
    <!-- Home -->
    <!-- <p ref="p"> My name is {{ name }} and age is {{ age }}</p>
    <button @click="handleEvent">Click me </button><br>
    <input type="text" v-model="name"> -->

    <!-- <input type="number" v-model="age"></input> -->
    <!-- <button @click="age++">Increase age by 1</button> -->

    <!-- <p>{{object.name}} - {{object.age}}</p>
    <button @click="UpdateObject">Update Object</button>
    <button @click="RevertObject">Revert Object</button>

    <h2>Reactive </h2>
    <p>{{object1.name}} - {{object1.age}}</p>
    <button @click="UpdateObject1">Update Object1</button> -->
    <input type="text" v-model="search" />
    <p>Search - {{ search }}</p>
    <p v-for="name in MatchingNames" :key="name">{{ name }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, reactive ,computed} from "vue";
export default {
  name: "HomeView",
  setup() {
    // let name = ref("Vansh");
    // let age = ref(23);
    // console.log("setup")

    // const p = ref(null);

    // const handleEvent = () => {
    //   name.value = "XYZ";
    //   age.value = 24;
    //   console.log(p, p.value);
    //   p.value.classList.add("red");
    //   p.value.innerText = "My name is Vansh and age is 23";
    // }
    const search = ref("");
    const names = ref(["Vansh", "Mario", "tario", "luigi", "lungi", "andrew"]);
    const MatchingNames = computed(() => {
      return names.value.filter((name) => name.toLowerCase().includes(search.value.toLowerCase()));
    });

    return { search, MatchingNames };

    //  const object=ref({
    //   name: "Vansh",
    //   age: 23
    // })
    // const object1=reactive({
    //   name:"luigi",
    //   age:32
    // })
    // const UpdateObject=()=>{
    //   object.value.name="XYZ";
    //   object.value.age=24;
    // }
    // const UpdateObject1=()=>{
    //   object1.name="Miatrix";
    //   object1.age=18;
    // }
    // const RevertObject=()=>{
    //   object.value.name="Vansh";
    //   object.value.age=23;
    // }
    // // return { name, age, handleEvent, p ,  }
    // return {object, UpdateObject ,UpdateObject1, RevertObject ,object1}
  },
};
</script>

<style>
.red {
  color: red;
}
</style>
