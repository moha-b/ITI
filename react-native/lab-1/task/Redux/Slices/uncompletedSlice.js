import { createSlice } from "@reduxjs/toolkit";

const unCompletedTodosSlice = createSlice({
  name: "unCompletedTodos",
  initialState: {
    unCompletedTodos: [],
  },
  reducers: {
    unCompleteTodoAdd: (state, action) => {
      state.unCompletedTodos = [...state.unCompletedTodos, action.payload];
    },
    unCompleteTodoDelete: (state, action) => {
      state.unCompletedTodos = state.unCompletedTodos.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});

export const { unCompleteTodoAdd, unCompleteTodoDelete } =
  unCompletedTodosSlice.actions;

export default unCompletedTodosSlice;
