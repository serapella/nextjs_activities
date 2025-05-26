import { connect } from "./dbconnect";
import type { Id, Activity } from "./types";

//POKEMON

export const getCaughtPokemon = async (): Promise<Id[]> => {
  try {
    const conn = await connect();
    const [rows] = await conn.query<Id[]>("SELECT * FROM pokedex");
    return rows;
  } catch (error) {
    throw error;
  }
};

export const addToPokedex = async (id: number): Promise<void> => {
  try {
    const conn = await connect();
    await conn.query("INSERT INTO pokedex VALUES (?)", [id]);
  } catch (error) {
    throw error;
  }
};

export const removeFromPokedex = async (id: number): Promise<void> => {
  try {
    const conn = await connect();
    await conn.query("DELETE FROM pokedex WHERE id = ?", [id]);
  } catch (error) {
    throw error;
  }
};

//ACTIVITIES

export const getAllActivities = async (): Promise<Activity[]> => {
  try {
    const conn = await connect();
    const [rows] = await conn.query<Activity[]>("SELECT * FROM activities ORDER BY created_at DESC");
    return rows;
  } catch (error) {
    throw error;
  }
};

export const addActivity = async (
  activity: string,
  image?: string
): Promise<void> => {
  try {
    const conn = await connect();
    await conn.query("INSERT INTO activities (activity, image) VALUES (?, ?)", [
      activity,
      image || null,
    ]);
  } catch (error) {
    throw error;
  }
};

export const toggleActivity = async (id: number): Promise<void> => {
  try {
    const conn = await connect();
    await conn.query(
      "UPDATE activities SET checked = NOT checked WHERE id = ?",
      [id]
    );
  } catch (error) {
    throw error;
  }
};

export const deleteActivity = async (id: number): Promise<void> => {
  try {
    const conn = await connect();
    await conn.query("DELETE FROM activities WHERE id = ?", [id]);
  } catch (error) {
    throw error;
  }
};
