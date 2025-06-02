"use server";

import { revalidatePath } from "next/cache";
import { addActivityFromFormData } from "../actions";

export async function updateMessage(prevState: string, formData: FormData) {
  return formData.get("message") as string;
}

export async function addActivityServerAction(prevState: any, formData: FormData) {
  await addActivityFromFormData(formData);
  revalidatePath("/activities");
  return {};
} 