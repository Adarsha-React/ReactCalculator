import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const header = React.createElement("h1", {}, "Calculator");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
