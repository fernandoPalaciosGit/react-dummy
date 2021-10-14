import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false,
    errorInfo: "",
  };

  // lifecycle calle on throw error (catch and stops throw propagation) and returns the new state for this component
  // called before componentDidCatch()
  // static getDerivedStateFromError(error) {
  //     return {hasError: true, errorInfo: error.message};
  // }

  //lifeCycle on catch error
  componentDidCatch(error, errorInfo) {
    // log to SAAP : kibana, instana, azure , new Relic
    console.log("Error boundary", error, errorInfo);
    this.setState({ hasError: true, errorInfo: error.message });
  }

  // lifecycle on every state updating
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  Redirect = () => {
    return <Redirect to="/" />;
  };

  ErrorState = () => {
    return (
      <div>
        <h2>
          We have an erorr: <Link to="/">go Home</Link>
        </h2>
        <div>
          <strong>{this.state.errorInfo}</strong>
        </div>
      </div>
    );
  };

  render() {
    if (this.state.redirect) {
      return <this.Redirect />;
    } else if (this.state.hasError) {
      return <this.ErrorState />;
    } else {
      return this.props.children;
    }
  }
}
