<template>
  <div id="app">
    <CatList/>
    <CatForm/>
    <!-- <CatList v-bind:cats="$store.state.cats"/> -->
    <!-- <CatList :cats="cats"/> -->
    <!-- <CatForm v-on:catAdded="addCat"/> -->
    <!-- <transition name="fade">
      <p v-if="showMessage">Cat added</p>
    </transition>-->
  </div>
</template>

<script>
import CatList from "./components/CatList.vue";
import CatForm from "./components/CatForm.vue";
// import { setTimeout } from "timers";

export default {
  name: "app",
  components: {
    CatList,
    CatForm
  },
  data: () => ({
    // cats: ["Marcus", "Fleur"],
    // showMessage: false
  }),
  methods: {
    // addCat(newCat) {
    //   // this.cats.push(newCat);
    //   // this.showMessage = true;
    //   // setTimeout(() => {
    //   //   this.showMessage = false;
    //   // }, 1000);
    // }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px;
}

// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.5s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }
</style>
