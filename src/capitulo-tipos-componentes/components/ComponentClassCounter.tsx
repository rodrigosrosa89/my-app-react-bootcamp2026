import { Component } from "react";

class ComponentClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increase() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const { message } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h1>{message}</h1>
        <h2>Contador: {count}</h2>
        <button onClick={this.increase.bind(this)} className="button-count">
          Adicionar
        </button>
      </div>
    );
  }
}

export default ComponentClassCounter;
