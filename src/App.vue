<template>
  <div id="app">
    <CatList/>
    <CatForm/>
  </div>
</template>

<script>
import CatList from "./components/CatList.vue";
import CatForm from "./components/CatForm.vue";

export default {
  name: "app",
  components: {
    CatList,
    CatForm
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
</style>
