import { Component } from "react";
import { withRouter } from "react-router-dom";

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

  renderDescription(details) {
    return (
      <div className="details">
        <div>
          <h1>
            {details.breed}, {details.name}
          </h1>
          <div>
            {details.city}, {details.state}
          </div>
          <div>{details.description}</div>
          <button>Adopt {name}</button>
          {(details.images || []).map((image, idx) => (
            <img key={`${details.name}-${idx}`} src={image} alt=""/>
          ))}
        </div>
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
