// Central registry for SVG icon asset paths
// Add your SVG files under `@icons/` and reference them here.

export const ICONS = {
  brand: {
    // Example: logo: new URL("@icons/logo.svg", import.meta.url).href,
  },
  ui: {
    // Example: cart: new URL("@icons/cart.svg", import.meta.url).href,
    appIcon: new URL("@icons/icon.svg", import.meta.url).href,
    shoppingBasket: new URL("@icons/svg/shopping_basket.svg", import.meta.url)
      .href,
  },
  placeholders: {
    image: new URL(
      "@assets/images/placeholders/aun_festivals_img_placeholder.svg",
      import.meta.url
    ).href,
  },
};
