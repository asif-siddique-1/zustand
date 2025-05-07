import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Todo {
  id: string;
  title: string;
  dueDate: string;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (todo: Todo) =>
        set((state) => ({ todos: [...state.todos, todo] })),
      removeTodo: (id: string) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
    }),
    {
      name: "todo-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
