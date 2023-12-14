<template>
  <section
    class="container content"
    @click="changeTheme"
    :class="{ 'dark-theme': isDarkTheme, 'light-theme': !isDarkTheme }"
  >
    <header><header-comp /></header>

    <main>
      <!-- Add Task Input -->
      <theme-comp />
      <div class="rounded-3 shadow bg-light p-3 pb-1 p-sm-5 pb-sm-3 mb-2">
        <input
          class="form-control"
          type="text"
          name="task"
          placeholder="Enter a Task"
        />
        <br />

        <!-- Add Task Button -->
        <button class="btn btn-sm btn-primary mb-3">Add Task</button>

        <!-- List of Tasks -->
        <ul class="p-0">
          <li>
            <div
              class="my-3 p-3 p-sm-4 shadow-sm rounded-3 text-light bg-secondary"
            >
              <div class="row">
                <div class="my-1 col-md-10 col-lg-11">
                  <input class="form-check-input" type="checkbox" />
                  <label class="form-check-label ps-2"
                    ><!--{{ todo.text }}--></label
                  >
                </div>
                <div class="col-md-2 col-lg-1">
                  <button class="btn btn-sm btn-danger mt-2 mt-sm-0">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </main>

    <footer><footer-comp /></footer>
  </section>
</template>

<script setup>
import HeaderComp from "@/components/HeaderComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import ThemeComp from "@/components/ThemeComp.vue";
import { ref, watch } from "vue";

const theme = ref(localStorage.getItem("theme") || "dark");

const isDarkTheme = ref(theme.value === "dark");

const changeTheme = () => {
  theme.value = theme.value === "dark" ? "light" : "dark";
  localStorage.setItem("theme", theme.value);
};

watch(theme, (newTheme) => {
  isDarkTheme.value = newTheme === "dark";
});
</script>

<style lang="scss" scoped>
.button {
  box-shadow: 12px 12px 16px 0 #00000040, -8px -8px 12px 0 #ffffff4d;
  background: linear-gradient(135deg, #00000038, #ffffff40);
  border-radius: 50px;
  padding: 20px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    background: none;
  }
}

ul {
  li {
    list-style: none;
  }
}

.content {
  transition: color 1s ease, background-color 1s ease;
}

.light-theme {
  background-color: #f5f5f5;
  color: #000;
}

.dark-theme {
  background-color: #2a2a2a;
  color: #f5f5f5;
}
</style>
