import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "../components/Carousel";

class Details extends Component {
  API = "https://pets-v2.dev-apis.com/pets";
  state = { loading: true };

  async getPet(petId) {
    return await fetch(`${this.API}?id=${petId}`)
      .then((res) => res.json())
      .then(({ pets }) => pets[0] || {})
      .catch(() => {});
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
      <div className="details">
        <Carousel images={details.images} />
        {this.renderDetails(details)}
      </div>
    );
  }

  render() {
    // as we know render() executes every time, inside render changes any variable
    // so as state() of pets loads its information by async fetch(), then this render funciton is going to log twice (each time any parameter is going to update)
    // the part of rendering is very performanced because is going to recreate the DOM only the part is affected

    return this.state.loading
      ? this.renderLoader()
      : this.renderDescription(this.state);
  }
}

export default withRouter(Details);
