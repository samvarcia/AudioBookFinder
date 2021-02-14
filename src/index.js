import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { AudioBookProvider } from "./contexts/AudioBook";

ReactDOM.render(
  <AudioBookProvider>
    <App />
  </AudioBookProvider>,
  document.getElementById("app")
);
