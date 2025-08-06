"use server";
import { createClient } from "./supabase/server";
import { cache } from "react";
import { logger } from "./logger/default-logger";

export const clearSupabaseSession = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
};

export const getSessionUser = cache(async () => {
  const supabase = createClient();

  try {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError?.code === "user_banned") {
      logger.error(authError?.message);
      return;
    }

    if (authError || !user) {
      return;
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (profileError || !profile) {
      logger.error(profileError?.message);
      return;
    }

    return {
      id: user.id,
      email: user.email!,
      created_at: user.created_at!,
      phone: user.phone!,
      name: user.user_metadata?.name || profile?.full_name || "Sin nombre",
      profile,
    };
  } catch (err: any) {
    logger.error(err);
  }
});
