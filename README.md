# Zustand + Zod POC

A simple and interactive proof-of-concept (POC) app demonstrating:
- **Zustand** for global state management
- **Zod** for schema validation
- Built with **Next.js** (App Router)

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

---

## 🧠 Key Concepts

### Zustand (State Management)
- Manages user authentication and todos globally.
- Example usage:
  ```ts
  import { userStore } from '@/stores/userStore';
  const { user, login, logout } = userStore();
  ```

### Zod (Validation & Flow)
Zod is used for robust, type-safe validation of todo input fields. Here's how it fits into the app:

#### 1. Schema Definition
All todo validations are defined in a single schema:
```ts
// src/utils/todoSchema.ts
import { z } from "zod";
export const todoSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  dueDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date",
  }),
});
export type TodoInput = z.infer<typeof todoSchema>;
```

#### 2. Form Integration
The schema is used with React Hook Form for instant feedback and error handling:
```ts
// src/components/todoForm.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { todoSchema, TodoInput } from "@/utils/todoSchema";

const { register, handleSubmit, formState: { errors }, reset } = useForm<TodoInput>({
  resolver: zodResolver(todoSchema),
});
```
- On submit, only valid data passes to the store.

#### 3. Store Updates & Persistence
When a todo passes validation, it's added to the Zustand store and persisted in localStorage:
```ts
// src/components/todoForm.tsx
const onSubmit = (data: TodoInput) => {
  addTodo({ ...data, id: uuidv4() });
  reset();
};
```
```ts
// src/stores/todoStore.ts
export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (todo: Todo) => set((state) => ({ todos: [...state.todos, todo] })),
      // ...
    }),
    {
      name: "todo-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
```

#### 4. Flow Summary
1. **User fills the todo form** →
2. **Zod validates input** via schema on submit →
3. **Valid data** is sent to Zustand store (`addTodo`) →
4. **Todos are persisted** in localStorage automatically

#### 5. Extending Validation
- Add new fields to `todoSchema` for more complex todos (e.g., priority, description)
- Update form and store types accordingly

> **Zod ensures only valid, structured data ever enters your app's state!**

---

## 📁 Project Structure (Key Files)
- `src/stores/userStore.ts` — Zustand store for user state
- `src/stores/todoStore.ts` — Zustand store for todos
- `src/components/todoForm.tsx` — Todo form with Zod validation
- `src/app/login/page.tsx` — Login page
- `src/app/todo/page.tsx` — Todos dashboard
- `src/app/page.tsx` — Landing page

---

## 📝 How It Works
- **Login**: Simulated login updates global state
- **Todos**: Add, view, and manage todos (state persists)
- **Validation**: Todo form input is validated using Zod before adding
- **Conditional Routing**: Redirects based on auth state

---

## 🤝 Extending This POC
- Add more fields to the todo (update Zod schema & store)
- Integrate API calls for persistent storage
- Add user registration or real authentication
- Enhance UI/UX with more features

---

## 💡 Why Zustand & Zod?
- **Zustand**: Minimal, scalable, and easy-to-use state management
- **Zod**: Type-safe, composable validation for forms and APIs

---

## 📣 Questions?
Feel free to reach out or fork and experiment!
