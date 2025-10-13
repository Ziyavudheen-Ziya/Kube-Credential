import type { JSX } from "react";
import { Navigate } from "react-router-dom";


export const ProtectedRoutes = ({ children }: { children:JSX.Element})=>{

      const token = localStorage.getItem('authToken')

      if(!token)return <Navigate to="/login"/>
      return children
}