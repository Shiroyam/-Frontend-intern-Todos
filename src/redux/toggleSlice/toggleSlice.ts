import { createSlice } from "@reduxjs/toolkit";

interface IState {
  all: boolean;
  active: boolean;
  completed: boolean;
}

const initialState: IState = {
  all: true,
  active: false,
  completed: false,
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    clickAll(state: IState) {
      state.all = true;
      state.active = false;
      state.completed = false;
      console.log("1");
    },
    clickActive(state: IState) {
      state.all = false;
      state.active = true;
      state.completed = false;
      console.log("2");
    },
    clickCompleted(state: IState) {
      state.all = false;
      state.active = false;
      state.completed = true;
      console.log("3");
    },
  },
});

export const { clickAll, clickActive, clickCompleted } = toggleSlice.actions;
export default toggleSlice.reducer;
