import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "buy some milk", isFav: false },
      { id: 2, title: "buy some bread", isFav: true },
      { id: 3, title: "buy some bread", isFav: true },
    ],
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
    },

    deleteTask(id) {
      this.tasks = this.tasks.filter((t) => t.id !== id);
    },

    toggleFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.isFav = !task.isFav;
    },
  },
});
