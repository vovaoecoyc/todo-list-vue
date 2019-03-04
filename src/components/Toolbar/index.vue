<template>
  <div class="toolbar d-flex m-auto flex-column">
    <Instruments/>
    <TaskAdd/>
  </div>
</template>

<script>
import TaskAdd from "./TaskAdd";
import Instruments from "./Instruments";

export default {
  name: "Toolbar",
  components: { TaskAdd, Instruments }
};
</script>

<style>
.toolbar {
  width: 40%;
}
</style>

