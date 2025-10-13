import React, { useState } from "react";
import "./Login.css";
import {  useNavigate } from "react-router-dom";
import { apiClientVerification } from "../../lib/apiClient";
import { loginVerification } from "../../Api/api";

interface LoginForm {
  email: string;
  password: string;
}

interface LoginResponse {
  message: string;

  user: {
    emial: string;
    password: string;
  };
  token: string;
}

function Login() {
  const [form, setForm] = useState<LoginForm>({ email: "", password: "" });

  const navigate = useNavigate();
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // const exsisitingToken = localStorage.getItem("authToken");

    try {
      const response = await apiClientVerification.post<LoginResponse>(
        loginVerification,
        form
      );

      if (response.status === 200) {
        localStorage.setItem("authToken", response.data.token);

        alert("Login successfully");
        navigate("/home");
      }
    } catch (error: any) {
      if (error.response) {
        const status = error.response.status;
        const msg = error.response.data?.message;

        if (status === 400) {
          alert(msg);
        }
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleOnchange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleOnchange}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        New user? <a href="/signup">Signup</a>
      </p>
    </div>
  );
}

export default Login;
