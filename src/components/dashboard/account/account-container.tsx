"use client"

import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { AccountInfo } from "./account-info";
import { AccountDetailsForm } from "./account-details-form";
import { FormProvider, useForm } from "react-hook-form";
import { useUser } from "@/context/UserContext";

export const AccountContainer = () => {
  const { user } = useUser();

  const formOPtions = {
    defaultValues: {
      full_name: user?.profile.full_name,
      role: user?.profile.role,
    },
  };

  const methods = useForm(formOPtions);

  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">Cuenta</Typography>
      </div>
      <Grid container spacing={3}>
        <FormProvider {...methods}>
          <Grid size={{ xs: 12 }}>
            <AccountInfo />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <AccountDetailsForm />
          </Grid>
        </FormProvider>
      </Grid>
    </Stack>
  );
};
