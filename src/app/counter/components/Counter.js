import { Component } from "react";

export default class Counter extends Component {
  // constructor(prop) { // By default
  //   super(prop);
  // }

  state = {
    counter: 0,
  };

  incrementCounter = () => {
    this.setState(
      ({ counter }, { max, step }) =>
        counter < max && { counter: counter + step }
    );
  };

  decrementCounter = () => {
    this.setState(
      ({ counter }, { min, step }) =>
        counter > min && { counter: counter - step }
    );
  };

  resetCounter = () => this.setState({ counter: 0 });

  componentDidMount() {
    // this.setState({counter: this.state.counter + 1});
    // this.setState({counter: this.state.counter + 1});
    // this.setState({counter: this.state.counter + 1}); // solamente se ejecuta este (1 render) -> counter = 1
    // this.setState({counter: 2});
    // this.setState({counter: 1});
    // this.setState({counter: 3}); // solamente se ejecuta este (1 render) -> counter = 3
    // this.setState(({counter}) => ({counter: ++counter}));
    // this.setState(({counter}) => ({counter: ++counter}));
    // this.setState(({counter}) => ({counter: ++counter})); // solamente se ejecuta este (1 render) -> counter = 3
  }

  render() {
    const { counter } = this.state;
    const { min, max, step } = this.props;

    return (
      <main className="Counter">
        <div>STEPS: {step}</div>
        <div>MIN: {min}</div>
        <div>MAX: {max}</div>
        <p className="count">{counter}</p>
        <section className="controls">
          <button onClick={this.incrementCounter}>Increment</button>
          <button onClick={this.decrementCounter}>Decrement</button>
          <button onClick={this.resetCounter}>Reset</button>
        </section>
      </main>
    );
  }
}
