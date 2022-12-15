import "./index.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "./components/Welcome";

export function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Welcome name="janmanpreet" />} />
      </Routes>
    </div>
  );
}
