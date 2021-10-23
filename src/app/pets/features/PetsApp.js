import React from "react";
import { Component, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { READ_MODE } from "../providers/ReaderMode";
import { StrictMode } from "react";
import {
  Provider as ReduxProvider,
  useSelector,
  useDispatch,
} from "react-redux";
import store from "./../store";
import updateTheme from "../store/actions/themeAction";

// const SearchParameters = lazy(() => import("../pages/SearchParameters"));
const SearchParameters = lazy(() =>
  import("../pages/SearchParameters_formHook")
);
const DetailsWithErrorBoundary = lazy(() => import("../pages/Details"));

export default class PetsApp extends Component {
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
          <SearchParameters />
        </Route>
      </Switch>
    );
  };

  ToggleReader = () => {
    const theme = useSelector(({ theme }) => theme);
    const dispatch = useDispatch();
    const options = Object.entries(READ_MODE).map(([key, theme]) => (
      <option key={key} value={theme}>
        {key}
      </option>
    ));

    return (
      <select
        defaultValue={theme}
        onChange={({ target }) => dispatch(updateTheme(target.value))}
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
              <ReduxProvider store={store}>
                <this.Header />
                <this.ToggleReader />
                <this.Body />
              </ReduxProvider>
            </BrowserRouter>
          </Suspense>
        </div>
      </StrictMode>
    );
  }
}
