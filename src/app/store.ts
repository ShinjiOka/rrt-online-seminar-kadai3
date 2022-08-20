import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todos/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  }
});

export type RootReducer = ReturnType<typeof store.getState>