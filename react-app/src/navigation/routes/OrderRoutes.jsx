import { Route } from "react-router-dom";
import OrderListView from "@presentation/views/orders/OrderListView";
import OrderDetailView from "@presentation/views/orders/OrderDetailView";
import OrderTrackingView from "@presentation/views/orders/OrderTrackingView";

export function OrderRoutes() {
  return (
    <Route path="/orders">
      <Route index element={<OrderListView />} />
      <Route path=":orderId" element={<OrderDetailView />} />
      <Route path=":orderId/tracking" element={<OrderTrackingView />} />
    </Route>
  );
}
