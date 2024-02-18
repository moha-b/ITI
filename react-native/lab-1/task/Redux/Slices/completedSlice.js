import { createSlice } from "@reduxjs/toolkit";

const completedTodosSlice = createSlice({
  name: "completedTodos",
  initialState: {
    completedTodos: [],
  },
  reducers: {
    completeTodoAdd: (state, action) => {
      state.completedTodos = [...state.completedTodos, action.payload];
    },
    completeTodoDelete: (state, action) => {
      state.completedTodos = state.completedTodos.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});

export const { completeTodoAdd, completeTodoDelete } =
  completedTodosSlice.actions;

export default completedTodosSlice;
