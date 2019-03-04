<template>
  <input type="text" class="form-control" @input="searchTasks" v-model="searchString">
</template>

<script>
export default {
  name: "Search",
  data() {
    return { searchString: "" };
  },
  methods: {
    searchTasks() {
      const filter = {
        isFiltred: true,
        filterString: this.searchString
      };
      this.$store.commit("setFilterString", { ...filter });
    }
  }
};
</script>

<style>
</style>

