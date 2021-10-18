import React from "react";
import { Component, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { ReaderMode, READ_MODE } from "../providers/ReaderMode";
import { StrictMode } from "react";

const SearchParameters = lazy(() => import("../pages/SearchParameters"));
const DetailsWithErrorBoundary = lazy(() => import("../pages/Details"));

export default class PetsApp extends Component {
  state = {
    reader: READ_MODE.LIGHT,
  };

  Header = () => {
    return (
      <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500">
        <Link className="text-6xl text-white hover:text-gray-200" to="/">
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

  // se lanza cada vez que Suspend de tenta que se esta cargando un import de manera lazy
  LoadingImportAssets = () => <h3>Loading routes...</h3>;

  render() {
    return (
      <StrictMode>
        <div className="p-0 m-0 page-background">
          <Suspense fallback={<this.LoadingImportAssets />}>
            <BrowserRouter>
              <this.Header />
              <this.ToggleReader />

              <ReaderMode.Provider value={this.state.reader}>
                <this.Body />
              </ReaderMode.Provider>
            </BrowserRouter>
          </Suspense>
        </div>
      </StrictMode>
    );
  }
}
