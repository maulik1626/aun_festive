import { Route } from "react-router-dom";
import CartView from "@presentation/views/cart/CartView";
import CheckoutView from "@presentation/views/cart/CheckoutView";

export function CartRoutes() {
  return (
    <Route path="/cart">
      <Route index element={<CartView />} />
      <Route path="checkout" element={<CheckoutView />} />
    </Route>
  );
}
