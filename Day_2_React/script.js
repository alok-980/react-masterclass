import React from "react";
import ReactDOM from "react-dom";

const h1 = React.createElement("h1", {}, "Hello React");

ReactDOM.createRoot(document.getElementById("root")).render(h1);