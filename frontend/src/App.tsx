import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./Components/signup/SignupUser";
import Login from "./Components/login/Login";
import Home from "./Components/Home/Home";
import { ProtectedRoutes } from "./Components/protectedRoute/ProtectedRoutes";
import { PublicRoute } from "./Components/pubilcRoute/PublicRoutes";
function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route
            path="/auth/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
          <Route
            path="/verification/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
