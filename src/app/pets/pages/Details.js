import {Component, lazy} from "react";
import {withRouter} from "react-router-dom";
import Carousel from "../components/Carousel";
import ErrorBoundary from "../components/ErrorBoundary";
import {ReaderMode} from "../providers/ReaderMode";
const Modal = lazy(() => import('../portals/Modal'));

class Details extends Component {
  API = "https://pets-v2.dev-apis.com/pets";
  state = {loading: true, numberOfResults: 0, showModal: false};

  async getPet(petId) {
    return await fetch(`${this.API}?id=${petId}`)
      .then((res) => res.json())
      .then(
        ({pets, numberOfResults}) => ({...pets[0], numberOfResults} || {})
      )
      .catch(() => ({numberOfResults: 0}));
  }

  // execute once after the first render
  async componentDidMount() {
    const routeDetailsId = this.props.match.params.id;

    this.setState({
      loading: false,
      ...(await this.getPet(routeDetailsId)),
    });
  }

  Loader = () => {
    return <h2>loading … </h2>;
  };

  adopt = () => (window.location = "http://bit.ly/adopt");
  toggleModal = () => this.setState({showModal: !this.state.showModal});

  AdoptModal = ({name}) => {
    return (
      <Modal>
        <h2>Whould you like to adopt {name}?</h2>
        <div className="buttons">
          <button onClick={this.adopt}>Yes</button>
          <button onClick={this.toggleModal}>No</button>
        </div>
      </Modal>
    );
  };

  Details = ({breed, name, city, state, description}) => {
    const adoptModal = this.state.showModal ? (
      <this.AdoptModal name={name}/>
    ) : null;

    return (
      <div>
        <h1>
          {breed}, {name}
        </h1>
        <div>
          {city}, {state}
        </div>
        <div>{description}</div>
        <button onClick={this.toggleModal}>Adopt {name}</button>
        {adoptModal}
      </div>
    );
  };

  Description = (details) => {
    return (
      <ReaderMode.Consumer>
        {(theme) => (
          <div className={`details ${theme}`}>
            <Carousel images={details.images}/>
            <this.Details {...details} />
          </div>
        )}
      </ReaderMode.Consumer>
    );
  };

  render() {
    // as we know render() executes every time, inside render changes any variable
    // so as state() of pets loads its information by async fetch(), then this render funciton is going to log twice (each time any parameter is going to update)
    // the part of rendering is very performanced because is going to recreate the DOM only the part is affected

    if (!this.state.loading && this.state.numberOfResults === 0) {
      throw new Error("We have no Pets! in id " + this.props.match.params.id);
    }

    return this.state.loading ? (
      <this.Loader/>
    ) : (
      <this.Description {...this.state} />
    );
  }
}

export const DetailsWithRouter = withRouter(Details);
export const DetailsWithErrorBoundary = (props) => (
  <ErrorBoundary>
    <DetailsWithRouter {...props} />
  </ErrorBoundary>
);
export default DetailsWithErrorBoundary;
