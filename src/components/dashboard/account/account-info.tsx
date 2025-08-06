"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useUser } from "@/context/UserContext";
import { parseISO } from "@/utils/dayjs";
import { CloudUploadIcon } from "lucide-react";
import { styled } from "@mui/material";
import { deleteImageFromCloudinary, uploadImage } from "@/services/file";
import { logger } from "@/utils/logger/default-logger";
import { updateUserImage } from "@/services/users";

export function AccountInfo(): React.JSX.Element {
  const { isLoading: isUserLoading, user, checkSession } = useUser();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file || file.size === 0) {
      logger.error("Archivo no válido o vacío");
      return;
    }
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("file", file);

      // 🔥 Eliminar imagen anterior si existe
      if (user?.profile.avatar_url) {
        await deleteImageFromCloudinary(user.image_id || "");
      }

      logger.debug("Uploading file:", file.name);
      const result = await uploadImage(formData);

      if (result.error) {
        logger.error("Error uploading image:", result.detail);
        return;
      }

      logger.debug("Image uploaded successfully:", result.data);

      if (result.data?.id)
        await updateUserImage(user?.profile.id || "", result.data.id);

      checkSession();
    } catch (error) {
      logger.error("Error al subir la imagen:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card sx={{ maxWidth: "25rem", marginX: "auto" }}>
      <CardContent>
        <Stack spacing={2} sx={{ alignItems: "center" }}>
          <div>
            <Avatar
              src={user?.profile.avatar_url || ""}
              alt={user?.profile.full_name || "avatar not found"}
              sx={{ height: "220px", width: "220px" }}
            />
          </div>
          <Stack spacing={0.5} sx={{ textAlign: "center" }}>
            <Typography variant="h6">{user?.email}</Typography>
            <Typography variant="h6">{user?.phone}</Typography>
            <Typography variant="h6">{parseISO(user?.created_at)}</Typography>
          </Stack>
        </Stack>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          loading={isLoading}
          disabled={isLoading}
          component="label"
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload files
          <VisuallyHiddenInput
            disabled={isLoading}
            type="file"
            onChange={handleFileChange}
          />
        </Button>
      </CardActions>
    </Card>
  );
}

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
