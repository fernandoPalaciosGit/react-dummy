import { Component } from "react";
import { withRouter } from "react-router-dom";

const API = "https://pets-v2.dev-apis.com/pets";

class Details extends Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  async componentDidMount() {
    const routeDetailsId = this.props.match.params.id;
    const { pets } = await fetch(`${API}?id=${routeDetailsId}`).then((res) =>
      res.json()
    );

    this.setState({
      loading: false,
      ...pets[0],
    });
  }

  render() {
    // as we know render() executes every time, inside render changes any variable
    // so as state() of pets loads its information by async fetch(), then this render funciton is going to log twice (each time any parameter is going to update)
    // the part of rendering is very performanced because is going to recreate the DOM only the part is affected

    const { loading, animal, breed, city, state, description, name, images } =
      this.state;

    return (
      !loading && (
        <div className="details">
          <div>
            <h1>
              {breed}, {name}
            </h1>
            <div>
              {city}, {state}
            </div>
            <div>{description}</div>
            {(images || []).map((image, idx) => (
              <img key={`${name}-${idx}`} src={image} />
            ))}
          </div>
        </div>
      )
    );
  }
}

export default withRouter(Details);
