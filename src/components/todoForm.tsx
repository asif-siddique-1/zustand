"use client";

import { useTodoStore } from "@/stores/todoStore";
import { TodoInput, todoSchema } from "@/utils/todoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { FormField } from "./FormField";

export const TodoForm = () => {
  const { addTodo } = useTodoStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TodoInput>({
    resolver: zodResolver(todoSchema),
  });

  const onSubmit = (data: TodoInput) => {
    addTodo({ ...data, id: uuidv4() });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 items-center"
    >
      <FormField
        name="title"
        placeholder="Title"
        register={register}
        error={errors.title}
        type="text"
      />
      <FormField
        name="dueDate"
        placeholder="Due Date"
        register={register}
        error={errors.dueDate}
        type="date"
      />
      <button
        type="submit"
        className="cursor-pointer bg-blue-500 text-white p-2 rounded"
      >
        Add Todo
      </button>
    </form>
  );
};
