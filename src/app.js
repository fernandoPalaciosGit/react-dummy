import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import SearchParameters from "./pages/SearchParameters";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { DetailsWithRouter, DetailsWithErrorBoundary } from "./pages/Details";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">
            <h1>Page Thumbnail</h1>
          </Link>
        </header>

        <Switch>
          <Route path="/details/:id">
            <DetailsWithErrorBoundary />
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
