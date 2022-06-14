import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Obj {
  name: string;
  completed: boolean;
  id: string;
}
interface IState {
  task: Array<Obj>;
  filterBy: string;
  flagTask: boolean;
}

const initialState: IState = {
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
  flagTask: true,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state: IState, action: PayloadAction<string>) {
      state.task.push({
        name: action.payload,
        completed: false,
        id: "" + Math.random(),
      });
    },
    deleteTask(state: IState) {
      state.task = state.task.filter((obj: any) => !obj.completed);
    },
    filterActiveTask(state: IState) {
      state.filterBy = "Active";
    },
    filterCompletedTask(state: IState) {
      state.filterBy = "Completed";
    },
    filterAllTask(state: IState) {
      state.filterBy = "All";
    },
    checkbox(state: IState, action: PayloadAction<string>) {
      state.task.map((obj: any) => {
        if (obj.id === action.payload) {
          obj.completed = !obj.completed;
        }
      });
    },
    showTask(state: IState) {
      state.flagTask = !state.flagTask;
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
  showTask,
} = taskSlice.actions;

export default taskSlice.reducer;
