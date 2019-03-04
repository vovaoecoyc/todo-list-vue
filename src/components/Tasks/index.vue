<template>
  <section>
    <Toolbar/>
    <TaskList v-if="tasks.length !== 0"/>
    <Spinner v-else/>
  </section>
</template>

<script>
import Toolbar from "../Toolbar";
import TaskList from "./TaskList";
import Spinner from "@/components/UI/Spinner";

export default {
  name: "Tasks",
  components: { Toolbar, TaskList, Spinner },
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    }
  }
};
</script>

<style>
</style>

