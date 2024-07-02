"use server";

import * as z from "zod";

import { RegisterFormSchema } from "@/schemes";

export const register = async (values: z.infer<typeof RegisterFormSchema>) => {
  const validatedFields = RegisterFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  return { success: "Email sent!" };
};
