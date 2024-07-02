"use server";

import * as z from "zod";

import { LoginFormSchema } from "@/schemes";

export const login = async (values: z.infer<typeof LoginFormSchema>) => {
  const validatedFields = LoginFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  return { success: "Email sent!" };
};
