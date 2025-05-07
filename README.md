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

### Zod (Validation)
- Used for simple, type-safe validation of form input.
- Ensures only valid todos reach your app's state.
- Example:
  ```ts
  // src/utils/todoSchema.ts
  import { z } from "zod";
  export const todoSchema = z.object({
    title: z.string().min(3),
    dueDate: z.string(),
  });
  ```

---

## 🏪 Zustand (State Management, Updates & Persistence)
Zustand is the heart of state management in this POC. It’s minimal, powerful, and easy to use.

### How Zustand Works:

#### 1. Store Creation
```ts
import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (id) => set((state) => ({ todos: state.todos.filter(t => t.id !== id) })),
}));
```

#### 2. Updating State (set)
- `set` is Zustand’s way to update state.
- Any update triggers a rerender in components that use the changed state.

#### 3. Using State in Components
```ts
const { todos, addTodo } = useTodoStore();
addTodo(newTodo); // Updates state and rerenders subscribers
```

#### 4. Persistence
- With `persist`, state is saved to localStorage and restored on reload.
```ts
import { persist } from "zustand/middleware";

export const useTodoStore = create(
  persist(
    (set) => ({ /* ... */ }),
    { name: "todo-store" }
  )
);
```

#### 5. Flow Diagram
```mermaid
flowchart LR
  A[User Action: Add/Remove Todo] --> B[Zod Validation]
  B -- valid --> C[Zustand set()]
  C --> D[State Updated]
  D --> E[Component Rerenders]
  D --> F[Persist to localStorage]
  B -- invalid --> G[Show Error]
```

#### 6. Why Zustand?
- Minimal API, no boilerplate
- Reactivity: Only components using changed state rerender
- Middleware: Easy persistence, devtools, etc.

> **Zustand makes state management a breeze—create, update, persist, and scale with confidence!**

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
