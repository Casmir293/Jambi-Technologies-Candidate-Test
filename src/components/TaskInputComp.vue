<template>
  <form @submit.prevent="handleSubmit">
    <!-- Add Task Input -->
    <input
      class="form-control"
      type="text"
      name="task"
      placeholder="Enter a Task"
      v-model="newTask"
    />
    <br />

    <!-- Add Task Button -->
    <button class="btn btn-sm btn-primary mb-3">Add Task</button>
  </form>
</template>

<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import { ref } from "vue";

const taskStore = useTaskStore();
const newTask = ref("");

// Add task button function
const handleSubmit = () => {
  if (newTask.value.length > 0) {
    taskStore.addTask({
      title: newTask.value,
      isFav: false,
      id: Math.floor(Math.random() * 90000),
    });
    newTask.value = "";
  }
};
</script>

<style lang="scss" scoped></style>
