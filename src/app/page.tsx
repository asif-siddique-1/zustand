"use client";

import Link from "next/link";
import { userStore } from "@/stores/userStore";

export default function Home() {
  const { user, logout } = userStore();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 text-blue-700 text-center">
        Welcome to Zustand POC
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-md mb-8">
        This is a simple demo application using Zustand for state management in
        Next.js. Use the navigation to explore features like login and todos.
      </p>
      <div className="flex gap-4">
        {!user && (
          <Link href="/login">
            <span className="px-6 py-2 rounded bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors">
              Login
            </span>
          </Link>
        )}
        {user && (
          <div className="flex gap-4">
            <Link
              href="/todo"
              className="px-6 py-2 rounded bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition-colors"
            >
              Todos
            </Link>
            <button
              onClick={logout}
              className="px-6 py-2 rounded bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
