import { TodoInput } from "@/utils/todoSchema";
import { FieldError, UseFormRegister } from "react-hook-form";

interface FormFieldProps {
  name: NameFields;
  placeholder: string;
  register: UseFormRegister<TodoInput>;
  error: FieldError | undefined;
  type: string;
}

type NameFields = keyof TodoInput;

export const FormField = ({
  name,
  placeholder,
  register,
  error,
  type,
}: FormFieldProps) => {
  return (
    <div>
      <input
        className="border min-w-[300px] border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type={type}
        {...register(name)}
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};
