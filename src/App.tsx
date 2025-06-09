import React from "react";
import { QueryBuilder } from "./components/QueryBuild";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div
        style={{
          background: "orange",
        }}
      >
        1. Add at least one rule, a bug will occur 👇
      </div>
      <QueryBuilder />
    </div>
  );
}
