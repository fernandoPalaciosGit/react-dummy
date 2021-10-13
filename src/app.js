import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import SearchParameters from "./components/SearchParameters";

const App = () => {
  return (
    <div>
      <h1>Page Thumbnail</h1>
      <SearchParameters location="Seattle" />
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
