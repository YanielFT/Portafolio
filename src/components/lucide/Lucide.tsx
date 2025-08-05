"use client";

import { forwardRef } from "react";
import Box, { BoxProps } from "@mui/material/Box";
import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";

interface Props extends BoxProps {
  icon: keyof typeof LucideIcons;
  width?: number | string;
  height?: number | string;
  color?: string;
  strokeWidth?: number;
}

const Iconify = forwardRef<SVGSVGElement, Props>(
  (
    { icon, width = 20, height = width, color, strokeWidth = 2, sx, ...other },
    ref
  ) => {
    const LucideIcon = LucideIcons[icon];

    // Validar que sea un componente React válido
    if (!LucideIcon || typeof LucideIcon !== "function") return null;

    const IconComponent = LucideIcon as React.FC<LucideProps>;

    return (
      <Box
        ref={ref}
        className="component-iconify"
        sx={{ display: "inline-flex", width, height, color, ...sx }}
        {...other}
      >
        <IconComponent
          size={Number(width)}
          color={color}
          strokeWidth={strokeWidth}
        />
      </Box>
    );
  }
);

Iconify.displayName = "Iconify";

export default Iconify;
