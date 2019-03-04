<template>
  <div class="form-group d-flex">
    <input
      @input="$v.task.$touch()"
      class="form-control"
      type="text"
      placeholder="Enter new task"
      v-model="task"
      @keyup.enter="addTask"
    >
    <button @click="addTask" :disabled="$v.$invalid" class="btn btn-success ml-2">Add</button>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "TaskAdd",
  data() {
    return {
      task: ""
    };
  },
  validations: {
    task: {
      required,
      minLength
    }
  },
  methods: {
    addTask() {
      const task = this.task;
      if (task.trim()) {
        this.$store.dispatch("addTask", task);
        this.task = "";
      }
    }
  }
};
</script>

<style>
</style>


