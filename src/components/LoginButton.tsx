"use client";

import { userStore } from "@/stores/userStore";
import { LoginInput, loginSchema } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormField } from "./FormField";
import { redirect } from "next/navigation";

export const LoginButton = () => {
  const { login } = userStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = (data: LoginInput) => {
    login(data);
    redirect("/todo");
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col gap-4 items-center"
    >
      <FormField<LoginInput>
        name="name"
        placeholder="Name"
        register={register}
        error={errors.name}
        type="text"
      />
      <FormField<LoginInput>
        name="email"
        placeholder="Email"
        register={register}
        error={errors.email}
        type="email"
      />
      <button className="cursor-pointer bg-blue-500 text-white p-2 rounded">
        <span className="mr-2">👋</span>
        Login
      </button>
    </form>
  );
};
