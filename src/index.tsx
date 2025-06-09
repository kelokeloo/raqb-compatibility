import React from "react";
import ReactDOM from "react-dom"; // 注意这里不再是 "react-dom/client"
import App from "./App";

const rootElement = document.getElementById("root"); // React 16 的 ReactDOM.render 可以直接接受 HTMLElement
// const root = ReactDOM.createRoot(rootElement); // 这一行在 React 16 中不需要

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement // 将根元素作为第二个参数传入
);
