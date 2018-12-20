<template>
  <div>
    <h1>Cat List</h1>
    <ul>
      <li v-bind:key="cat" v-for="cat in cats">{{ cat }}</li>
      <!-- <li :key="cat" v-for="cat in cats">{{ cat }}</li> -->
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CatList",
  //   props: {
  //     cats: Array
  //   },
  computed: mapState(["cats"])
};
</script>

<style lang="scss">
</style>
