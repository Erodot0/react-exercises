import "./index.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "./components/Welcome";
import { Counter } from "./components/Counter";

export function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Welcome name="janmanpreet" />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
}
