import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function Protected() {
  const token = useSelector(
    (state) =>
      state.register.token ||
      state.login.token ||
      window.sessionStorage.getItem("Token")
  );

  if (!token) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
