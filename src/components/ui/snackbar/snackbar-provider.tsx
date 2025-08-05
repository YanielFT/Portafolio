"use client";

import {
  SnackbarProvider as NotistackProvider,
  closeSnackbar,
} from "notistack";
import { useRef } from "react";

import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";

import { StyledIcon, StyledNotistack } from "./styles";
import Iconify from "@/components/lucide/Lucide";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function SnackbarProvider({ children }: Props) {
  const notistackRef = useRef<any>(null);

  return (
    <NotistackProvider
      ref={notistackRef}
      maxSnack={5}
      preventDuplicate
      autoHideDuration={3000}
      TransitionComponent={Collapse}
      variant="success" // Set default variant
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      iconVariant={{
        info: (
          <StyledIcon color="info">
            <Iconify icon="Info" width={24} />
          </StyledIcon>
        ),
        success: (
          <StyledIcon color="success">
            <Iconify icon="CheckCircle2" width={24} />
          </StyledIcon>
        ),
        warning: (
          <StyledIcon color="warning">
            <Iconify icon="AlertTriangle" width={24} />
          </StyledIcon>
        ),
        error: (
          <StyledIcon color="error">
            <Iconify icon="CircleAlert" width={24} />
          </StyledIcon>
        ),
      }}
      Components={{
        default: StyledNotistack,
        info: StyledNotistack,
        success: StyledNotistack,
        warning: StyledNotistack,
        error: StyledNotistack,
      }}
      // with close as default
      action={(snackbarId) => (
        <IconButton
          size="small"
          onClick={() => closeSnackbar(snackbarId)}
          sx={{ p: 0.5 }}
        >
          <Iconify width={16} icon="X" />
        </IconButton>
      )}
    >
      {children}
    </NotistackProvider>
  );
}
