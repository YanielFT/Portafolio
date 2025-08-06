"use client";

import { Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { AccountInfo } from "./account-info";
import { AccountDetailsForm } from "./account-details-form";
import { FormProvider, useForm } from "react-hook-form";
import { useUser } from "@/context/UserContext";
import { updateUserDetails } from "@/services/users";
import { enqueueSnackbar } from "notistack";
import { logger } from "@/utils/logger/default-logger";

export const AccountContainer = () => {
  const { user, checkSession, isAdmin } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const formOPtions = {
    defaultValues: {
      full_name: user?.profile.full_name || "",
      role: isAdmin ? user?.profile.role : "user",
    },
  };

  const methods = useForm(formOPtions);

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const { error, detail } = await updateUserDetails(
        data,
        user?.profile.id!
      );
      if (error) {
        logger.error(detail);
        enqueueSnackbar({
          message: "Error al modificar los datos del usuario",
          variant: "error",
        });
      }
      checkSession();
    } catch (error) {
      enqueueSnackbar({
        message: "Error al modificar los datos del usuario",
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <AccountDetailsForm isLoading={isLoading} />
            </form>
          </Grid>
        </FormProvider>
      </Grid>
    </Stack>
  );
};
