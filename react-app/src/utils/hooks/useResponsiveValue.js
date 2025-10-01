import { useResponsive } from "./useResponsive";

/**
 * Hook to select responsive values based on current breakpoint
 * @param {Object} values - Object with mobile/tablet/desktop keys
 * @returns {*} The value for current breakpoint
 *
 * @example
 * const fontSize = useResponsiveValue({ mobile: "14px", tablet: "16px", desktop: "18px" })
 */
export function useResponsiveValue(values) {
  const { isMobile, isTablet } = useResponsive();

  if (isMobile) return values.mobile;
  if (isTablet) return values.tablet;
  return values.desktop;
}
