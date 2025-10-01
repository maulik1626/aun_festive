import { COLORS } from "@config/constants/colors";
import { DIMENSIONS } from "@config/constants/dimensions";

export default function Icon({
  src,
  size = "medium", // 'small' | 'medium' | 'large' | 'xl' or number
  color = COLORS.text,
  alt = "icon",
  ...props
}) {
  const iconSize =
    typeof size === "number" ? size : DIMENSIONS.icon.size[size] || DIMENSIONS.icon.size.medium;

  return (
    <img
      src={src}
      alt={alt}
      width={iconSize}
      height={iconSize}
      style={{ display: "inline-block", verticalAlign: "middle", color }}
      {...props}
    />
  );
}
