import type { RowDataPacket } from "mysql2";

export interface Id extends RowDataPacket {
  id: number;
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

export interface PokemonApiResult {
  results: {
    name: string;
    url: string;
  }[];
}

export interface Activity extends RowDataPacket {
  id: number;
  activity: string;
  checked: boolean;
  image: string | null;
  created_at: Date;
}
