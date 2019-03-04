<template>
  <div class="task-list d-flex m-auto flex-column">
    <h4 class="m-auto">Tasks List</h4>
    <div class="information ml-3 mr-3 d-flex justify-content-between">
      <span class="completed">{{ completed }}</span>
      <span>{{ expected }}</span>
    </div>
    <Task v-for="task in tasks" :key="task.id" :taskItem="task"/>
  </div>
</template>

<script>
import Task from "../Task";

export default {
  name: "TaskList",
  components: { Task },
  computed: {
    completed() {
      const completedTasks = this.$store.getters.tasks.filter(
        val => val.completed
      );
      !completedTasks && [];
      return `Completed tasks ${completedTasks.length}`;
    },
    expected() {
      const expectedTasks = this.$store.getters.tasks.filter(
        val => !val.completed
      );
      !expectedTasks && [];
      return `Expected tasks ${expectedTasks.length}`;
    },
    tasks() {
      const filter = this.$store.getters.filter;
      if (filter.isFiltred) {
        const tasks = this.$store.getters.tasks;
        let filtredTasks = [];
        filtredTasks = tasks.filter(value => {
          return value.task
            .toLowerCase()
            .indexOf(filter.filterString.toLowerCase()) !== -1
            ? true
            : false;
        });
        if (filter.filterStatus !== null) {
          filtredTasks = filtredTasks.filter(value => {
            return value.completed === filter.filterStatus ? true : false;
          });
        }

        return filtredTasks;
      }
      return this.$store.getters.tasks;
    }
  }
};
</script>

<style>
.task-list {
  width: 40%;
}

.completed {
  color: #28a745;
}
</style>


