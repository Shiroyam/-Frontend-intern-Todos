import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice/taskSlice";
import toggleReducer from "./toggleSlice/toggleSlice"

const rootReducer = combineReducers({
  taskReducer,
  toggleReducer
});

export const storeSetup = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof storeSetup>;
