import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h2", {}, "This is From React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
