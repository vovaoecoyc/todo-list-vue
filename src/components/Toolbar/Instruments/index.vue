<template>
  <div class="d-flex mt-2 mb-2">
    <Search/>
    <Filters/>
  </div>
</template>

<script>
import Search from "./Search";
import Filters from "./Filters";

export default {
  name: "Instruments",
  components: { Search, Filters }
};
</script>

<style>
</style>

