<template>
  <div
    class="d-flex justify-content-between align-items-center mt-2 mb-2 p-2 pl-3 pr-3 task-item"
    :class="{'completed': taskItem.completed}"
  >
    <span>{{ taskItem.task }}</span>
    <div class="actions-bar">
      <button @click="setStatusTask(taskItem, true)" class="btn btn-sm btn-outline-success">
        <font-awesome-icon icon="exclamation"/>
      </button>
      <button @click="setStatusTask(taskItem, false)" class="btn btn-sm btn-outline-secondary">
        <font-awesome-icon icon="ban"/>
      </button>
      <button @click="removeTask" class="btn btn-sm btn-outline-danger">
        <font-awesome-icon icon="times"/>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    taskItem: {
      type: Object,
      required: true
    }
  },
  methods: {
    setStatusTask(taskData, status) {
      if (status !== this.taskItem.completed) {
        const updatedTask = {
          ...taskData,
          completed: status
        };
        this.$store.dispatch("setStatusTask", { ...updatedTask });
      }
    },

    removeTask() {
      const { id } = this.taskItem;
      this.$store.dispatch("removeTask", { idTask: id });
    }
  }
};
</script>

<style scoped>
button {
  height: 100%;
}

.task-item {
  border-radius: 25px;
  background-color: #ddd5dd;
}

.completed {
  background-color: #b3f86d;
}
</style>

