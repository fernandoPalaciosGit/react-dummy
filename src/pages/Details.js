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
      loading: true,
      ...pets[0],
    });
  }

  render() {
    // as we know render() executes every time, inside render changes any variable
    // so as state() of pets loads its information by async fetch(), then this render funciton is going to log twice (each time any parameter is going to update)
    // the part of rendering is very performanced because is going to recreate the DOM only the part is affected

    console.log(this.state);

    return (
      <div className="search-params">
        <h2>Details Page</h2>
      </div>
    );
  }
}

export default withRouter(Details);
