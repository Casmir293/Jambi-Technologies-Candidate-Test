import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
    showSuccessMessage: false,
    showCompletedMessage: false,
    showDeletedMessage: false,
  }),

  getters: {
    totalTask: (state) => {
      return state.tasks.length;
    },

    totalIsFav: (state) => {
      return state.tasks.filter((task) => task.isFav).length;
    },
  },

  actions: {
    addTask(task) {
      this.tasks.push(task);
      this.showSuccessMessage = true;

      // feedback message for 1 second
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 1000);
    },

    deleteTask(id) {
      this.tasks = this.tasks.filter((t) => t.id !== id);
      this.showDeletedMessage = true;

      // feedback message for 1 second
      setTimeout(() => {
        this.showDeletedMessage = false;
      }, 1000);
    },

    toggleFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.isFav = !task.isFav;

      if (task.isFav) {
        this.showCompletedMessage = true;

        // feedback message for 1 second
        setTimeout(() => {
          this.showCompletedMessage = false;
        }, 1000);
      }
    },
  },
});
