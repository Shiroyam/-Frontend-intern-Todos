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
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state: any, action: any) {
      state.task.push({
        name: action.payload,
        completed: false,
        id: Math.random()
      })
    },
  },
});
export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
