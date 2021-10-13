import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import SearchParameters from "./pages/SearchParameters";
import Details from "./pages/Details";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Page Thumbnail</h1>
      <Router>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParameters location="Seattle" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
