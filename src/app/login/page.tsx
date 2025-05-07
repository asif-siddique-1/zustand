"use client";

import { LoginButton } from "@/components/LoginButton";
import { userStore } from "@/stores/userStore";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const { user } = userStore();

  if (user) {
    redirect("/todo");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
        <LoginButton />
      </div>
    </div>
  );
}
