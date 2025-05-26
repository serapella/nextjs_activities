"use server";

import { revalidateTag } from "next/cache";
import {
  addToPokedex,
  removeFromPokedex,
  getAllActivities,
  addActivity,
} from "./queries";
import type { Activity } from "./types";

export const handleCatch = async (fd: FormData) => {
  try {
    await addToPokedex(parseInt(fd.get("id") as string));
    revalidateTag("pokedex");
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};

export const handleRelease = async (fd: FormData) => {
  try {
    await removeFromPokedex(parseInt(fd.get("id") as string));
    revalidateTag("pokedex");
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};

export const addActivityFromFormData = async (
  fd: FormData
): Promise<Activity | null> => {
  try {
    const activity = fd.get("activity") as string;
    const image = fd.get("image") as string | null;
    await addActivity(activity, image || undefined);
    const all = await getAllActivities();
    return all.length > 0 ? all[0] : null;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};
