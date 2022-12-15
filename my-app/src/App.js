import "./index.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "./components/Welcome";
import { Counter } from "./components/Counter";
import { ShowGithubUser } from "./ShowGIthubUser";

export function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Welcome name="janmanpreet" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/user/:username" element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}
