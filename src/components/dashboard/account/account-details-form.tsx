"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import { Grid, MenuItem } from "@mui/material";
import RHFTextField from "@/components/hook-form/rhf-text-field";
import { RHFSelect } from "@/components/hook-form/rhf-select";

const ROLE = {
  admin: "admin",
  user: "user",
};

export function AccountDetailsForm(): React.JSX.Element {
  return (
    <Card>
      <CardHeader subheader="The information can be edited" title="Profile" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid size={{ md: 6, xs: 12 }}>
            <RHFTextField
              size="small"
              name="full_name"
              label="Nombre completo"
              placeholder="Yaniel Fuentes"
              type="text"
            />
          </Grid>
          <Grid size={{ md: 6, xs: 12 }}>
            <RHFSelect
              name="role"
              label="Role"
              placeholder="Seleccionar role..."
              type="text"
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="user">user</MenuItem>
            </RHFSelect>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button variant="contained">Guardar</Button>
      </CardActions>
    </Card>
  );
}
