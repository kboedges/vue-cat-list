<template>
  <div>
    <input v-model.lazy="newCat" type="text">
    <button v-on:click="addCat">Add</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CatForm",
  data: () => ({
    newCat: ""
  }),
  methods: {
    addCat() {
      if (this.newCat.length) {
        this.$store.dispatch("addCat", this.newCat);
        this.newCat = "";
      }
    }
  }
};
</script>
