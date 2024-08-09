import axios from "axios";
import { TodoTask } from "../entity/todo";

const todosApi = axios.create({
  baseURL: "http://localhost:3500",
});

export const getTodos = async (): Promise<TodoTask[]> => {
  const response = await todosApi.get<TodoTask[]>("/todos");
  return response.data;
};

export const addTodo = async (todo: TodoTask) => {
  return await todosApi.post("/todos", todo);
};

export const updateTodo = async (todo: TodoTask) => {
  return await todosApi.patch(`/todos/${todo.id}`, todo);
};

export const deleteTodo = async ({ id }: TodoTask) => {
  return await todosApi.delete(`/todos/${id}`, { data: { id } });
};

export default todosApi;
