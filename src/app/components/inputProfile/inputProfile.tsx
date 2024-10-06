"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { login } from "@/slices/authSlice";
import { useRouter } from "next/navigation";

export default function InputProfile() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fakeToken = "fake-jwt-token";
    dispatch(login(fakeToken));
    router.push("/profile");
  };

  return (
    <form className={style.formLogin} onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label htmlFor="emailInput">Email:</label>
      <input
        type="email"
        id="emailInput"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <label htmlFor="passwordInput">Password:</label>
      <input
        type="password"
        id="passwordInput"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {password.length < 6 && (
        <p className={style.errorText}>
          Your password must be at least 6 characters long
        </p>
      )}

      <button type="submit">LOG IN</button>
    </form>
  );
}
