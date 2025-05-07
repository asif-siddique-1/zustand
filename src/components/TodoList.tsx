"use client";

import { useTodoStore } from "@/stores/todoStore";

export const TodoList = () => {
  const { todos, removeTodo } = useTodoStore();

  if (todos.length === 0) {
    return <p className="text-center">No todos found</p>;
  }

  return (
    <ul className="flex flex-col items-center gap-2">
      {todos.map((todo) => (
        <li key={todo.id} className="flex gap-2 items-center">
          <span className="font-bold text-lg">{todo.title}</span>
          <span className="text-gray-500">{todo.dueDate}</span>
          <button
            onClick={() => removeTodo(todo.id)}
            className="cursor-pointer text-red-700 hover:text-red-900 transition-colors duration-200 text-sm  p-2 rounded"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
