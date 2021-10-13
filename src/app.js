import React from "react";
import { StrictMode, Component } from "react";
import ReactDOM from "react-dom";
import SearchParameters from "./pages/SearchParameters";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { DetailsWithRouter, DetailsWithErrorBoundary } from "./pages/Details";
import { ReaderMode, READ_MODE } from "./providers/ReaderMode";

export default class App extends Component {
  state = {
    reader: READ_MODE.LIGHT,
  };

  renderHeader() {
    return (
      <header>
        <Link to="/">
          <h1>Page Thumbnail</h1>
        </Link>
      </header>
    );
  }

  renderBody() {
    return (
      <Switch>
        <Route path="/details/:id">
          <DetailsWithErrorBoundary theme={this.state.reader} />
        </Route>
        <Route path="/">
          <SearchParameters location="Seattle" />
        </Route>
      </Switch>
    );
  }

  renderToggleReader() {
    return (
      <div>
        <button onClick={() => this.setState({ reader: READ_MODE.LIGHT })}>
          light mode
        </button>
        <br />
        <button onClick={() => this.setState({ reader: READ_MODE.DARK })}>
          dark mode
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Router>
          {this.renderHeader()}
          {this.renderToggleReader()}

          <ReaderMode.Provider value={this.state.reader}>
            {this.renderBody()}
          </ReaderMode.Provider>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
