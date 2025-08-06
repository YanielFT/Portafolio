import { ApiResponse, SupabaseInsertResponse } from "@/types/api";
import { clearSupabaseSession } from "./sessions";
import { logger } from "./logger/default-logger";
import { AuthResponse } from "@supabase/supabase-js";

export const handleSupabaseAuthError = <T>(
  response: AuthResponse
): ApiResponse<T> => {
  logger.debug(response.error?.message, "handleSupabaseAuthError");
  if (response.error?.status === 401) {
    clearSupabaseSession();
    return {
      error: true,
      title: "Unauthorized",
      status: 401,
      detail: "You are not authorized to access this resource",
    };
  }

  if (response.error) {
    return {
      error: true,
      title: "Authentication Error",
      status: response.error.status || 500,
      detail: response.error.message,
    };
  }

  return {
    error: false,
    status: 200,
    data: response.data as T,
  };
};

export const handleSupabaseError = <T>(
  response: SupabaseInsertResponse
): ApiResponse<T> => {
  logger.debug("handleSupabaseError", response.error?.message);
  if (response.status === 401) {
    clearSupabaseSession();
    return {
      error: true,
      title: "Unauthorized",
      status: 401,
      detail: "You are not authorized to access this resource",
    };
  }

  if (response.error) {
    return {
      error: true,
      title: "Authentication Error",
      status: response.status || 500,
      detail: response.error.message,
    };
  }

  return {
    error: false,
    status: 200,
    data: response.data as T,
  };
};
