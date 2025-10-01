export const TYPOGRAPHY = {
  // Font families (from main.jsx theme)
  fontPrimary:
    '"Brand Primary", system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, sans-serif',
  fontHighlight:
    '"Brand Highlight", system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, sans-serif',

  // Font sizes (responsive: mobile/tablet/desktop)
  fontSize: {
    xs: { mobile: "10px", tablet: "11px", desktop: "12px" },
    sm: { mobile: "12px", tablet: "13px", desktop: "14px" },
    base: { mobile: "14px", tablet: "15px", desktop: "16px" },
    lg: { mobile: "16px", tablet: "17px", desktop: "18px" },
    xl: { mobile: "18px", tablet: "19px", desktop: "20px" },
    h1: { mobile: "28px", tablet: "36px", desktop: "48px" },
    h2: { mobile: "24px", tablet: "30px", desktop: "36px" },
    h3: { mobile: "20px", tablet: "24px", desktop: "28px" },
    h4: { mobile: "18px", tablet: "20px", desktop: "24px" },
    h5: { mobile: "16px", tablet: "18px", desktop: "20px" },
    h6: { mobile: "14px", tablet: "16px", desktop: "18px" },
    body1: { mobile: "14px", tablet: "15px", desktop: "16px" },
    body2: { mobile: "13px", tablet: "14px", desktop: "14px" },
    caption: { mobile: "11px", tablet: "12px", desktop: "12px" },
  },

  // Font weights (from Button, Input, Modal)
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Line heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },

  // Letter spacing
  letterSpacing: {
    tight: "-0.01em",
    normal: "0",
    wide: "0.02em",
  },
};
