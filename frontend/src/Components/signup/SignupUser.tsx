import React, { useState } from "react";
import "./Signup.css";
import { signupIssueCredentials } from "../../Api/api";
import { apiClient } from "../../lib/apiClient";
import { useNavigate } from "react-router-dom";

interface SignupForm {
  name: string;
  email: string;
  password: string;
}

interface SignupResponse {
  message: string;

  user: {
    id: string;
    name: string;
    email: string;
    password: string;
  };
  token: string;
}

function Signup() {
  const [form, setForm] = useState<SignupForm>({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOnsubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await apiClient.post<SignupResponse>(
        signupIssueCredentials,
        form
      );

      if (response.status === 201) {
        let token = response.data.token;
        localStorage.setItem("authToken", token);
        alert("Signup successfully!");

      navigate("/home");
      }
    } catch (error: any) {
      if (error.response) {
        const status = error.response.status;
        const msg = error.response.data?.message || "Something went wrong";

        if (status === 400) {
          alert(msg);
        }
      } else {
        alert("Network error");
      }
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleOnsubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleOnchange}
          placeholder="Name"
          required
        />
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
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}

export default Signup;
