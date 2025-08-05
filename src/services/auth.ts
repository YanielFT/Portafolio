"use server";

import { ApiResponse } from "@/types/api";
import { AuthError, AuthResponse } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/server";
import { handleSupabaseAuthError } from "../utils/api";
import { UserLogin } from "@/types/auth";
import { logger } from "@/utils/logger/default-logger";

export async function signInWithPassword(
  data: UserLogin
): Promise<ApiResponse<AuthResponse>> {
  const supabase = createClient();
  const res = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  if (res.error) return handleSupabaseAuthError(res);
  return { data: res, error: false, status: 200 };
}

export async function signUpWithPassword(
  data: UserLogin
): Promise<ApiResponse<AuthResponse>> {
  const supabase = createClient();
  const res = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  });

  if (res.error) return handleSupabaseAuthError(res);
  return { data: res, error: false, status: 200 };
}

export async function SignOut(): Promise<
  ApiResponse<{
    error: AuthError | null;
  }>
> {
  const supabase = createClient();
  const res = await supabase.auth.signOut();

  if (res.error)
    return handleSupabaseAuthError({
      data: { user: null, session: null },
      error: res.error,
    });

  return { data: res, error: false, status: 200 };
}
