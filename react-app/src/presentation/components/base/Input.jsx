import TextField from "@mui/material/TextField";
import { COLORS } from "@config/constants/colors";
import { TYPOGRAPHY } from "@config/constants/typography";
import { DIMENSIONS } from "@config/constants/dimensions";
import { SPACING } from "@config/constants/spacing";

export default function Input({
  placeholder,
  helperText,
  error = false,
  type = "text",
  ...props
}) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder={placeholder}
      helperText={helperText}
      error={error}
      type={type}
      label={undefined}
      sx={{
        "& .MuiOutlinedInput-root": {
          backgroundColor: COLORS.white,
          borderRadius: DIMENSIONS.borderRadius.sm,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: COLORS.grey,
            borderWidth: DIMENSIONS.borderWidth.default,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: COLORS.grey,
            borderWidth: DIMENSIONS.borderWidth.default,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: COLORS.black,
            borderWidth: DIMENSIONS.borderWidth.default,
          },
          "& .MuiOutlinedInput-input": {
            fontSize: TYPOGRAPHY.fontSize.sm,
            padding: SPACING.padding.input,
          },
        },
        "& .MuiOutlinedInput-input::placeholder": {
          fontSize: TYPOGRAPHY.fontSize.sm,
          textTransform: "lowercase",
          fontWeight: TYPOGRAPHY.fontWeight.regular,
        },
      }}
      {...props}
    />
  );
}
