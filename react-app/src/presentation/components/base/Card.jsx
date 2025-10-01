import { COLORS, SHADOWS } from "@config/constants/colors";
import { DIMENSIONS } from "@config/constants/dimensions";
import { SPACING } from "@config/constants/spacing";

export default function Card({
  children,
  actions,
  as: Component = "div",
  ...props
}) {
  return (
    <Component
      style={{
        borderRadius: DIMENSIONS.borderRadius.md,
        backgroundColor: COLORS.white,
        border: `${DIMENSIONS.borderWidth.default} solid ${COLORS.grey}`,
        transition: "all 200ms ease",
        boxShadow: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = SHADOWS.elevationSm;
        e.currentTarget.style.borderColor = COLORS.grey;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = COLORS.grey;
      }}
      {...props}
    >
      <div style={{ padding: SPACING.padding.card }}>{children}</div>
      {actions ? (
        <div style={{ padding: SPACING.padding.card }}>{actions}</div>
      ) : null}
    </Component>
  );
}
