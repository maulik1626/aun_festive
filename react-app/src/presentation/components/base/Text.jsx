import Typography from "@mui/material/Typography";
import { COLORS } from "@config/constants/colors";
import { TYPOGRAPHY } from "@config/constants/typography";
import { useResponsiveValue } from "@utils/hooks/useResponsiveValue";

export default function Text({
  children,
  variant = "body1",
  color = COLORS.text,
  ...props
}) {
  const responsiveFontSize = useResponsiveValue(
    TYPOGRAPHY.fontSize[variant] || TYPOGRAPHY.fontSize.base
  );

  return (
    <Typography
      variant={variant}
      color={color}
      sx={{ fontSize: responsiveFontSize, ...props.sx }}
      {...props}
    >
      {children}
    </Typography>
  );
}
