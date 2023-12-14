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
  },

  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
  },
});
