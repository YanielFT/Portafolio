"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useUser } from "@/context/UserContext";
import { logger } from "@/utils/logger/default-logger";
import { LogOut } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { paths } from "@/utils/paths";

export interface UserPopoverProps {
  anchorEl: Element | null;
  onClose: () => void;
  open: boolean;
}

export function UserPopover({
  anchorEl,
  onClose,
  open,
}: UserPopoverProps): React.JSX.Element {
  const { user } = useUser();
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut({ scope: "local" });

    if (error) {
      logger.error("Error al cerrar sesión:", error.message);
    } else {
      router.push(paths.auth.login);
    }
  };

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      onClose={onClose}
      open={open}
      slotProps={{ paper: { sx: { width: "240px" } } }}
    >
      <Box sx={{ p: "16px 20px " }}>
        <Typography variant="subtitle1" sx={{ textTransform: "uppercase" }}>
          {user?.profile.full_name && user.profile.full_name.split(" ")[0]}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {user?.email}
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        sx={{ p: "8px", "& .MuiMenuItem-root": { borderRadius: 1 } }}
      >
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogOut fontSize="var(--icon-fontSize-md)" />
          </ListItemIcon>
          Sign out
        </MenuItem>
      </MenuList>
    </Popover>
  );
}
