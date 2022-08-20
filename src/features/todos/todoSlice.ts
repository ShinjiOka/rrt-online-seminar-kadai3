import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoInput, Todo, TodoId } from "./types";
import { createTodo} from './crud';

export type TodoState = {
  todos: Todo[]
}

const initialState: TodoState = {
  todos: []
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    create: (state, action: PayloadAction<TodoInput>) => {
      const { title, body } = action.payload;
        if (!title || !body) {
          throw new Error('タイトルと本文を入力してください')
        }

        const todo = createTodo(action.payload);
        state.todos.push(todo);
    },
  }
})

export const { create } = todoSlice.actions;



export default todoSlice.reducer;