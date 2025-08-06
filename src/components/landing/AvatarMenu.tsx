"use client";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { LayoutDashboardIcon, LogInIcon, LogOutIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { createClient } from "@/utils/supabase/client";
import { logger } from "@/utils/logger/default-logger";
import { useRouter } from "next/navigation";

export default function AvatarMenu() {
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  logger.debug({ user });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const toggleMenu = () => setOpen(!open);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  // Posición del menú
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  const updateMenuPosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMenuPosition({
        top: rect.top + rect.height + 8, // debajo del avatar
        left: rect.right - 192, // ancho del menú
      });
    }
  };

  useEffect(() => {
    if (open) {
      updateMenuPosition();
      window.addEventListener("scroll", updateMenuPosition);
      window.addEventListener("resize", updateMenuPosition);
    }
    return () => {
      window.removeEventListener("scroll", updateMenuPosition);
      window.removeEventListener("resize", updateMenuPosition);
    };
  }, [open]);

  const handleLogout = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut({ scope: "local" });

    if (error) {
      logger.error("Error al cerrar sesión:", error.message);
    } else {
      router.refresh();
    }

    setOpen(false);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="relative translate-y-1">
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          className="rounded-full cursor-pointer overflow-hidden w-10 h-10 focus:outline-none border bg-white/15 backdrop-blur border-white/15"
        >
          <Image
            src={user?.profile.avatar_url || "/assets/avatar-default.svg"}
            alt="User avatar"
            width={40}
            height={40}
            className="object-cover rounded-full"
          />
        </button>
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-40 bg-emerald-600/10"
                  onClick={() => setOpen(false)}
                />

                {/* Menú */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="fixed z-50 w-48 bg-white shadow-md rounded-md py-2"
                  style={{
                    top: menuPosition.top,
                    left: menuPosition.left,
                  }}
                >
                  <Link
                    href="/dashboard"
                    className="text-gray-950 px-4 py-2 grid grid-cols-[24px_1fr] items-center gap-2 w-full hover:bg-gray-100"
                  >
                    <LayoutDashboardIcon size={24} />
                    <span>Administración</span>
                  </Link>

                  {user ? (
                    <button
                      onClick={handleLogout}
                      className="text-gray-950 px-4 py-2 grid grid-cols-[24px_1fr] items-center gap-2 w-full hover:bg-gray-100 text-left"
                    >
                      <LogOutIcon size={24} />
                      <span>Cerrar sesión</span>
                    </button>
                  ) : (
                    <Link
                      href="/auth/login"
                      className="text-gray-950 px-4 py-2 grid grid-cols-[24px_1fr] items-center gap-2 w-full hover:bg-gray-100"
                    >
                      <LogInIcon size={24} />
                      <span>Iniciar sesión</span>
                    </Link>
                  )}
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
