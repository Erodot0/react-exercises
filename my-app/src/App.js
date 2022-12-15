import "./index.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./components/Welcome";
import { Counter } from "./components/Counter";
import { ShowGithubUser } from "./ShowGIthubUser";
import { GithubUserList } from "./components/GithubUserList";

export function App() {
  return (
    <div className="container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/counter">counter</Link>
        <Link to="/user">User</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome name="janmanpreet" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/user" element={<GithubUserList />}>
          <Route index element={<p>Add a user and select it</p>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <h2>Page not found</h2>
              <Link to="/">Back to Home</Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
}
