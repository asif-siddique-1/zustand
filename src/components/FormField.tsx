import { FieldError, UseFormRegister, Path } from "react-hook-form";

interface FormFieldProps<T extends Record<string, any>> {
  name: Path<T>;
  placeholder: string;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
  type: string;
}

export function FormField<T extends Record<string, any>>({
  name,
  placeholder,
  register,
  error,
  type,
}: FormFieldProps<T>) {
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
}
