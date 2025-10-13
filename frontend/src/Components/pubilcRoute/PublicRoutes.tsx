import type { JSX } from "react";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("authToken");
  if (token) return <Navigate to="/home" />;
  return children;
};
