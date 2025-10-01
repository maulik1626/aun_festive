import { Route } from "react-router-dom";
import BaseComponentsDemo from "@presentation/views/demo/BaseComponentsDemo.jsx";

export function DemoRoutes() {
  return [
    <Route
      key="demo-base"
      path="/demo/base"
      element={<BaseComponentsDemo />}
    />,
  ];
}
