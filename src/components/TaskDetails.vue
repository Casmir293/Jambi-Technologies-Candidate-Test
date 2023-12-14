<template>
  <div class="task">
    <div class="icons d-inline">
      <font-awesome-icon
        icon="fa-solid fa-square-check"
        @click="taskStore.toggleFav(task.id)"
        :class="{ active: task.isFav }"
      />
    </div>
    <h4 class="d-inline ps-2">{{ task.title }}</h4>
    <br />

    <button
      class="btn btn-sm btn-danger mt-2 mt-sm-0"
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
  color: blue;
}

.icon svg .active {
  color: red;
}
</style>
