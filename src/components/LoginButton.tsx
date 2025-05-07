"use client";

import { userStore } from "@/stores/userStore";

export const LoginButton = () => {
  const { login } = userStore();

  const handleLogin = () => {
    login({ name: "John Doe", email: "john.doe@example.com" });
  };

  return (
    <button
      className="cursor-pointer bg-blue-500 text-white p-2 rounded"
      onClick={handleLogin}
    >
      Login
    </button>
  );
};
