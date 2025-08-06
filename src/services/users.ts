"use server";
import { ApiResponse } from "@/types/api";
import { handleSupabaseError } from "@/utils/api";
import { logger } from "@/utils/logger/default-logger";
import { createClient } from "@/utils/supabase/server";
const supabase = createClient();

export async function updateUserImage(
  userId: string,
  imagenId: string
): Promise<ApiResponse<any>> {
  const res = await supabase
    .from("profiles")
    .update({ imagen_id: imagenId })
    .eq("id", userId);
  logger.debug("updateUserImage:", res);

  if (res.error) return handleSupabaseError(res);
  return { data: res.data, error: false, status: 200 };
}
