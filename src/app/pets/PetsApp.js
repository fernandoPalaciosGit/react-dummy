import React from "react";
import { Component } from "react";
import SearchParameters from "./pages/SearchParameters";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { DetailsWithErrorBoundary } from "./pages/Details";
import { ReaderMode, READ_MODE } from "./providers/ReaderMode";

export default class PetsApp extends Component {
  state = {
    reader: READ_MODE.LIGHT,
  };

  Header = () => {
    return (
      <header>
        <Link to="/">
          <h1>Page Thumbnail</h1>
        </Link>
      </header>
    );
  };

  Body = () => {
    return (
      <Switch>
        <Route path="/details/:id">
          <DetailsWithErrorBoundary />
        </Route>
        <Route path="/">
          <SearchParameters location="Seattle" />
        </Route>
      </Switch>
    );
  };

  ToggleReader = () => {
    const options = Object.entries(READ_MODE).map(([key, reader]) => (
      <option key={key} value={reader}>
        {key}
      </option>
    ));
    return (
      <select
        onChange={({ target }) => this.setState({ reader: target.value })}
      >
        {options}
      </select>
    );
  };

  render() {
    return (
      <div>
        <Router>
          <this.Header />
          <this.ToggleReader />

          <ReaderMode.Provider value={this.state.reader}>
            <this.Body />
          </ReaderMode.Provider>
        </Router>
      </div>
    );
  }
}
