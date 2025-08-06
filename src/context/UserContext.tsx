"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import type { AuthChangeEvent, Session, User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";
import { logger } from "@/utils/logger/default-logger";
import { Profile } from "@/types/auth";

type UserType = {
  id: string;
  email: string;
  name: string;
  created_at: string;
  phone: string;
  image_id?: string;
  profile: Profile;
};

type UserContextType = {
  user: UserType | null;
  isLoading: boolean;
  error: string | null;
  isAdmin: boolean;
  checkSession: () => Promise<void>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUser(): UserContextType {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

interface UserProviderProps {
  initialUser?: UserType | null;
  children: React.ReactNode;
}

export function UserProvider({
  initialUser = null,
  children,
}: UserProviderProps) {
  const supabase = createClient();
  const [user, setUser] = useState<UserType | null>(initialUser);
  const [isLoading, setIsLoading] = useState(!initialUser);
  const [error, setError] = useState<string | null>(null);
  const isAdmin = user?.profile.role === "admin";

  const checkSession = useCallback(async () => {
    setIsLoading(true);

    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession();

    logger.debug("[UserProvider]: Checking session", {
      session,
    });

    if (sessionError || !session?.user) {
      setUser(null);
      setError(null);
      setIsLoading(false);
      return;
    }

    const supaUser = session.user;

    const { data: profileData, error: profileError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", supaUser.id)
      .maybeSingle();

    if (profileError || !profileData) {
      setUser(null);
      setError(profileError?.message ?? "No se encontró el perfil");
      setIsLoading(false);
      return;
    }

    const { data: imageData, error: imageError } = await supabase
      .from("imagenes")
      .select("*")
      .eq("id", profileData.imagen_id)
      .maybeSingle();

    setUser({
      id: supaUser.id,
      email: supaUser.email ?? "",
      created_at: supaUser.created_at ?? "",
      phone: supaUser.phone ?? "",
      name: supaUser.user_metadata?.name || profileData.full_name || "",
      image_id: imageData?.public_id || "",
      profile: {
        ...profileData,
        avatar_url: imageData?.imagen_url || "",
      },
    });

    setError(null);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    checkSession();
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event: AuthChangeEvent, session: Session | null) => {
        if (session?.user) {
          checkSession();
        } else {
          setUser(null);
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [checkSession]);

  return (
    <UserContext.Provider
      value={{ user, isLoading, error, checkSession, isAdmin }}
    >
      {children}
    </UserContext.Provider>
  );
}
