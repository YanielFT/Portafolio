import { Controller, useFormContext } from "react-hook-form";

import { InputLabel, Stack } from "@mui/material";
import TextField, { TextFieldProps } from "@mui/material/TextField";

// ----------------------------------------------------------------------

type Props = TextFieldProps & {
  name: string;
  dataTest?: string;
  autoComplete?: string;
  readOnly?: boolean;
  disabled?: boolean;
};

export default function RHFTextField({
  name,
  helperText,
  type,
  dataTest,
  autoComplete,
  readOnly,
  disabled,
  ...other
}: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        // TODO refactor using FormControl
        <div data-test={dataTest}>
          <Stack spacing={1}>
            <InputLabel
              required={other.required}
              id={`text-field-${name}-label`}
              htmlFor={other.id ?? `text-field-${name}`}
              sx={{
                fontWeight: 600,
                color: "text.primary",
                mb: 1,
                fontSize: 15,
              }}
              disabled={disabled}
            >
              {other.label}
            </InputLabel>
            <TextField
              autoComplete={autoComplete}
              {...field}
              disabled={disabled}
              fullWidth
              id={other.id ?? `text-field-${name}`}
              aria-labelledby={`text-field-${name}-label`}
              type={type}
              value={type === "number" && field.value === 0 ? "" : field.value}
              onChange={(event) => {
                if (type === "number") {
                  field.onChange(Number(event.target.value));
                } else {
                  field.onChange(event.target.value);
                }
              }}
              inputProps={{
                readOnly,
              }}
              error={!!error}
              helperText={error ? error?.message : helperText}
              {...other}
              label=""
            />
          </Stack>
        </div>
      )}
    />
  );
}
