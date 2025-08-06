"use client";
import { useRouter } from "next/navigation";
import { Box, Typography } from "@mui/material";
import { ArrowLeftIcon } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <Box sx={{ p: 3 }}>
      <Box
        onClick={() => router.back()}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 1,
          cursor: "pointer",
        }}
      >
        <ArrowLeftIcon />
        <Typography component="span">Volver</Typography>
      </Box>
    </Box>
  );
}
