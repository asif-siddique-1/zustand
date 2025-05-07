"use client";

import { TodoForm } from "@/components/todoForm";
import { TodoList } from "@/components/TodoList";
import { userStore } from "@/stores/userStore";
import { redirect } from "next/navigation";

export default function TodoPage() {
  const { user, logout } = userStore();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white/90 rounded-2xl shadow-2xl border border-gray-200 p-10 w-full max-w-2xl space-y-10 backdrop-blur-md">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-blue-600 text-4xl">📝</span>
            <h1 className="text-3xl font-extrabold text-blue-700 text-center drop-shadow">Your Todos</h1>
          </div>
          <p className="text-gray-600 mb-4 text-center text-lg">Welcome{user?.name ? `, ${user.name}` : ""}! Stay organized and productive.</p>
          <button
            className="mt-2 mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold shadow-lg hover:scale-105 hover:from-red-600 hover:to-pink-600 active:scale-95 transition-all duration-200"
            onClick={logout}
          >
            <span className="mr-2">🚪</span>Logout
          </button>
        </div>
        <div className="flex flex-col items-center bg-blue-50/80 rounded-xl p-6 shadow-inner border border-blue-100">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-blue-500 text-2xl">➕</span>
            <h2 className="text-xl font-semibold text-blue-800">Add Todo</h2>
          </div>
          <TodoForm />
        </div>
        <div className="flex flex-col items-center bg-green-50/80 rounded-xl p-6 shadow-inner border border-green-100">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-green-500 text-2xl">📋</span>
            <h2 className="text-xl font-semibold text-green-800">Todo List</h2>
          </div>
          <TodoList />
        </div>
      </div>
    </div>
  );
}
