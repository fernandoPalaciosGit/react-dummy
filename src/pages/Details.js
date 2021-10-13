import { Component, useContext } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "../components/Carousel";
import ErrorBoundary from "../components/ErrorBoundary";
import { ReaderMode } from "../providers/ReaderMode";

class Details extends Component {
  API = "https://pets-v2.dev-apis.com/pets";
  state = { loading: true, numberOfResults: 0 };

  async getPet(petId) {
    return await fetch(`${this.API}?id=${petId}`)
      .then((res) => res.json())
      .then(
        ({ pets, numberOfResults }) => ({ ...pets[0], numberOfResults } || {})
      )
      .catch(() => ({ numberOfResults: 0 }));
  }

  // execute once after the first render
  async componentDidMount() {
    const routeDetailsId = this.props.match.params.id;

    this.setState({
      loading: false,
      ...(await this.getPet(routeDetailsId)),
    });
  }

  renderLoader() {
    return <h2>loading … </h2>;
  }

  renderDetails({ breed, name, city, state, description }) {
    return (
      <div>
        <h1>
          {breed}, {name}
        </h1>
        <div>
          {city}, {state}
        </div>
        <div>{description}</div>
        <button>Adopt {name}</button>
      </div>
    );
  }

  renderDescription(details) {
    return (
      <div className={`details ${this.props.theme}`}>
        <Carousel images={details.images} />
        {this.renderDetails(details)}
      </div>
    );
  }

  render() {
    // as we know render() executes every time, inside render changes any variable
    // so as state() of pets loads its information by async fetch(), then this render funciton is going to log twice (each time any parameter is going to update)
    // the part of rendering is very performanced because is going to recreate the DOM only the part is affected

    if (!this.state.loading && this.state.numberOfResults === 0) {
      throw new Error("We have no Pets! in id " + this.props.match.params.id);
    }

    return this.state.loading
      ? this.renderLoader()
      : this.renderDescription(this.state);
  }
}

export const DetailsWithRouter = withRouter(Details);
export const DetailsWithErrorBoundary = (props) => (
  <ErrorBoundary>
    <DetailsWithRouter {...props} />
  </ErrorBoundary>
);
