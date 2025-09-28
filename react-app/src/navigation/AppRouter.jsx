import { Suspense, lazy } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import MainLayout from "@presentation/views/layout/MainLayout";
import AuthLayout from "@presentation/views/layout/AuthLayout";
import GuestLayout from "@presentation/views/layout/GuestLayout";
import NotFoundView from "@presentation/views/common/NotFoundView.jsx";
import HomeView from "@presentation/views/common/HomeView.jsx";
import LoginView from "@presentation/views/auth/LoginView";
import RegisterView from "@presentation/views/auth/RegisterView";

function ProtectedRoute({ isAuthed }) {
  if (!isAuthed) return <Navigate to="/auth/login" replace />;
  return <Outlet />;
}

export default function AppRouter() {
  // TODO: replace with real auth selector
  const isAuthed = false;

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomeView />} />

          <Route element={<ProtectedRoute isAuthed={isAuthed} />}>
            {/* Protected routes go here, e.g. profile, orders */}
          </Route>
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<LoginView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="register" element={<RegisterView />} />
        </Route>

        <Route path="*" element={<GuestLayout />}>
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
