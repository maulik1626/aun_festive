import { Route } from "react-router-dom";
import LoginView from "@presentation/views/auth/LoginView";
import RegisterView from "@presentation/views/auth/RegisterView";

export function AuthRoutes() {
  return (
    <Route path="/auth">
      <Route index element={<LoginView />} />
      <Route path="login" element={<LoginView />} />
      <Route path="register" element={<RegisterView />} />
    </Route>
  );
}
