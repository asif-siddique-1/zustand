import { z } from "zod";

export const todoSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  dueDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date",
  }),
});

export type TodoInput = z.infer<typeof todoSchema>;
