import { Controller, useFormContext } from "react-hook-form";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import { SxProps, Theme } from "@mui/material/styles";
import FormHelperText from "@mui/material/FormHelperText";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import FormControl, { FormControlProps } from "@mui/material/FormControl";
import { Stack } from "@mui/material";

// ----------------------------------------------------------------------

type RHFSelectProps = TextFieldProps & {
  name: string;
  native?: boolean;
  maxHeight?: boolean | number;
  children: React.ReactNode;
  PaperPropsSx?: SxProps<Theme>;
};

export function RHFSelect({
  name,
  native,
  maxHeight = 220,
  helperText,
  children,
  PaperPropsSx,
  label,
  required,
  disabled,
  ...other
}: RHFSelectProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <Stack spacing={1}>
            {label && (
              <InputLabel
                htmlFor={name}
                id={`${name}-label`}
                required={required}
                disabled={disabled}
                sx={{ fontWeight: 600, color: "text.primary", mb: 1 }}
              >
                {label}
              </InputLabel>
            )}
            <TextField
              {...field}
              select
              disabled={disabled}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-input": {
                  padding: "8.5px 14px", // Ajusta según tu diseño
                },
              }}
              SelectProps={{
                native,
                MenuProps: {
                  PaperProps: {
                    sx: {
                      ...(!native && {
                        maxHeight:
                          typeof maxHeight === "number" ? maxHeight : "unset",
                      }),
                    },
                  },
                },
                sx: { textTransform: "capitalize" },
              }}
              error={!!error}
              helperText={error ? error?.message : helperText}
              {...other}
            >
              {children}
            </TextField>
          </Stack>
        </>
      )}
    />
  );
}

// ----------------------------------------------------------------------

type RHFMultiSelectProps = FormControlProps & {
  name: string;
  label?: string;
  chip?: boolean;
  checkbox?: boolean;
  placeholder?: string;
  helperText?: React.ReactNode;
  options: {
    label: string;
    value: string;
  }[];
};

export function RHFMultiSelect({
  name,
  chip,
  label,
  options,
  checkbox,
  placeholder,
  helperText,
  ...other
}: RHFMultiSelectProps) {
  const { control } = useFormContext();

  const renderValues = (selectedIds: string[]) => {
    const selectedItems = options.filter((item) =>
      selectedIds.includes(item.value)
    );

    if (!selectedItems.length && placeholder) {
      return <Box sx={{ color: "text.disabled" }}>{placeholder}</Box>;
    }

    if (chip) {
      return (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
          {selectedItems.map((item) => (
            <Chip key={item.value} size="small" label={item.label} />
          ))}
        </Box>
      );
    }

    return selectedItems.map((item) => item.label).join(", ");
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl error={!!error} {...other}>
          {label && <InputLabel id={name}> {label} </InputLabel>}

          <Select
            {...field}
            multiple
            displayEmpty={!!placeholder}
            id={`multiple-${name}`}
            labelId={name}
            label={label}
            renderValue={renderValues}
          >
            {options.map((option) => {
              const selected = field.value.includes(option.value);

              return (
                <MenuItem key={option.value} value={option.value}>
                  {checkbox && (
                    <Checkbox size="small" disableRipple checked={selected} />
                  )}

                  {option.label}
                </MenuItem>
              );
            })}
          </Select>

          {(!!error || helperText) && (
            <FormHelperText error={!!error}>
              {error ? error?.message : helperText}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
