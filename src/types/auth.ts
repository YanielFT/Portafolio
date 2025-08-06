import { Database } from "../../database.types";

export type UserLogin = {
  email: string;
  password: string;
};

export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
export type ProfileInsert = Database["public"]["Tables"]["profiles"]["Insert"];
export type ProfileUpdate = Database["public"]["Tables"]["profiles"]["Update"];

export type Imagenes = Database["public"]["Tables"]["imagenes"]["Row"];
export type ImagenesInsert = Database["public"]["Tables"]["imagenes"]["Insert"];
export type ImagenesUpdate = Database["public"]["Tables"]["imagenes"]["Update"];
