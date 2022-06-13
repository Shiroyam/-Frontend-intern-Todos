import { createSlice } from "@reduxjs/toolkit";

export const initialState = [
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
];

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
  },
});
