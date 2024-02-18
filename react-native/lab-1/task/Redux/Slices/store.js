import { configureStore } from "@reduxjs/toolkit";
import completedTodosSlice from "./completedSlice";
import unCompletedTodosSlice from "./uncompletedSlice";
import todoSlice from "./todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    completedTodos: completedTodosSlice.reducer,
    unCompletedTodos: unCompletedTodosSlice.reducer,
  },
});
