<template>
  <div>
    <h1>Cat List</h1>
    <ul>
      <li v-bind:key="cat" v-for="cat in cats">{{ cat }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CatList",
  computed: mapState(["cats"])
};
</script>
