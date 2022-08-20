import { TodoInput, Todo } from "../types"
import { v4 as uuidv4 } from 'uuid';
import { getCurrentDateTime } from "../utils/date";

export const createTodo = (todo: TodoInput): Todo=> {
  return {
    id: todo.id ?? uuidv4(),
    title: todo.title,
    body: todo.body,
    status: todo.status ?? 'waiting',
    createdAt: todo.createdAt ?? getCurrentDateTime(),
    updatedAt: todo.updatedAt,
    deletedAt: todo.deletedAt,
  };
}