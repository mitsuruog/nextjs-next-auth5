import * as z from "zod";

export const LoginFormSchema = z.object({
  email: z.string().min(1, {
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z
    .string()
    .min(1, {
      message: "Code is required",
    })
    .optional(),
});

export const RegisterFormSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email(),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const ResetFormSchema = z.object({
  email: z.string().min(1, {
    message: "Email is required",
  }),
});

export const NewPasswordFormSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
});
