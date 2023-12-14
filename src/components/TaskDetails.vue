<template>
  <div class="task">
    <h4>{{ task.title }}</h4>
    <div class="icons"></div>
  </div>
</template>

<script setup>
const props = defineProps(["task"]);
</script>

<style lang="scss" scoped></style>
