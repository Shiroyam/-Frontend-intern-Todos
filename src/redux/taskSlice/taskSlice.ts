import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [
    {
      name: "Тестовое задание",
      completed: false,
      id: "1",
    },
    {
      name: "Прекрасный код",
      completed: true,
      id: "2",
    },
    {
      name: "Покрытие тестами",
      completed: false,
      id: "3",
    },
  ],
  filterBy: "All",
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state: any, action: any) {
      state.task.push({
        name: action.payload,
        completed: false,
        id: Math.random(),
      });
    },
    deleteTask(state: any) {
      state.task = [];
    },
    filterActiveTask(state: any) {
      state.filterBy = "Active";
    },
    filterCompletedTask(state: any) {
      state.filterBy = "Completed";
    },
    filterAllTask(state: any) {
      state.filterBy = "All";
    },
    checkbox(state: any, action: any) {
      state.task.map((obj: any) => {
        if (obj.id === action.payload) {
          obj.completed = !obj.completed;
        }
      });
    },
  },
});

export const {
  addTask,
  deleteTask,
  filterActiveTask,
  filterCompletedTask,
  filterAllTask,
  checkbox,
} = taskSlice.actions;

export default taskSlice.reducer;
