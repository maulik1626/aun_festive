import MuiButton from "@mui/material/Button";
import { COLORS, SHADOWS } from "@config/constants/colors";
import { TYPOGRAPHY } from "@config/constants/typography";
import { DIMENSIONS } from "@config/constants/dimensions";

export default function Button({
  children,
  kind = "primary", // 'primary' | 'secondary' | 'text'
  size = "medium",
  ...props
}) {
  const commonSx = {
    borderRadius: DIMENSIONS.borderRadius.lg,
    fontWeight: TYPOGRAPHY.fontWeight.medium,
    textTransform: "none",
    letterSpacing: TYPOGRAPHY.letterSpacing.normal,
    ":focus": { outline: "none" },
    ":focus-visible": { outline: "none" },
    "&.Mui-disabled": {
      backgroundColor: COLORS.greyDisabled,
      color: COLORS.white,
      boxShadow: "none",
      borderColor: "transparent",
      border: "none",
      backgroundImage: "none",
    },
  };

  const primarySx = {
    color: COLORS.white,
    backgroundImage: `linear-gradient(90deg, ${COLORS.primary} 0%, ${COLORS.primaryAccent} 100%)`,
    border: "none",
    boxShadow: SHADOWS.elevationSm,
    ":hover": {
      backgroundImage: `linear-gradient(90deg, ${COLORS.primary} 0%, ${COLORS.primaryAccent} 100%)`,
      boxShadow: SHADOWS.elevationSm,
    },
    ":active": {
      backgroundImage: `linear-gradient(90deg, ${COLORS.primary} 0%, ${COLORS.primaryAccent} 100%)`,
      boxShadow: SHADOWS.elevationSm,
    },
  };

  const secondarySx = {
    color: COLORS.black,
    backgroundColor: COLORS.white,
    border: `${DIMENSIONS.borderWidth.default} solid ${COLORS.black}`,
    boxShadow: "none",
    ":hover": {
      backgroundColor: COLORS.white,
      boxShadow: SHADOWS.elevationSm,
      borderColor: COLORS.black,
    },
    ":active": {
      backgroundColor: COLORS.white,
      boxShadow: SHADOWS.elevationSm,
      borderColor: COLORS.black,
    },
  };

  const textSx = {
    color: COLORS.primary,
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    ":hover": {
      color: COLORS.primary,
      backgroundColor: "transparent",
      boxShadow: "none",
    },
    ":active": {
      color: COLORS.primary,
      backgroundColor: "transparent",
      boxShadow: "none",
    },
  };

  const variantProps =
    kind === "secondary"
      ? { variant: "outlined", sx: { ...commonSx, ...secondarySx } }
      : kind === "text"
      ? { variant: "text", sx: { ...commonSx, ...textSx } }
      : { variant: "contained", sx: { ...commonSx, ...primarySx } };

  return (
    <MuiButton size={size} {...variantProps} {...props}>
      {children}
    </MuiButton>
  );
}
