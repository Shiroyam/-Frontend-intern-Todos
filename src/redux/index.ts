import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice/taskSlice";

const rootReducer = combineReducers({
  taskReducer,
});

export const storeSetup = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof storeSetup>;
