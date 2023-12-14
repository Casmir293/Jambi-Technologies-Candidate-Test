<template>
  <div class="task">
    <div class="icons d-inline">
      <font-awesome-icon
        icon="fa-solid fa-square-check"
        size="xl"
        @click="taskStore.toggleFav(task.id)"
        :class="{ active: task.isFav }"
      />
    </div>
    <h5 class="d-inline ps-2 main-task" @click="taskStore.toggleFav(task.id)">
      {{ task.title }}
    </h5>
    <br />

    <button
      class="btn btn-sm btn-danger mt-3"
      @click="taskStore.deleteTask(task.id)"
    >
      Delete
    </button>
  </div>
</template>

<script setup>
import { useTaskStore } from "@/stores/TaskStore";

const props = defineProps(["task"]);

const taskStore = useTaskStore();
</script>

<style lang="scss" scoped>
svg {
  opacity: 0.2;
  transition: 1s;
  cursor: pointer;
}

.active {
  opacity: 1;
  transition: 1s;
}

.main-task {
  cursor: pointer;
}
</style>
