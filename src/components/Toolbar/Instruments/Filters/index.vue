<template>
  <div class="d-flex ml-2">
    <button
      @click="filterTaskStatus(true)"
      class="btn btn-outline-info"
      :class="{'active-filter': (filterStatus !== null && filterStatus) && true}"
    >Completed</button>
    <button
      @click="filterTaskStatus(false)"
      class="btn btn-outline-info ml-1"
      :class="{'active-filter': (filterStatus !== null && !filterStatus) && true}"
    >Expected</button>
  </div>
</template>

<script>
export default {
  name: "Filters",
  computed: {
    filterStatus() {
      const status = this.$store.getters.filter["filterStatus"];
      return status;
    }
  },
  methods: {
    filterTaskStatus(status) {
      if (this.$store.getters.filter["filterStatus"] === status) {
        const filter = {
          filterStatus: null
        };
        this.$store.commit("removeFilterStatus", { ...filter });
      } else {
        const filter = {
          isFiltred: true,
          filterStatus: status
        };
        this.$store.commit("setFilterStatus", { ...filter });
      }
    }
  }
};
</script>

<style>
.active-filter {
  color: white;
  background-color: #17a2b8;
}
</style>