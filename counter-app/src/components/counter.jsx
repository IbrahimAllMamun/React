import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: 0,
  };

  hanldeIncrement = () => {
    let { value } = this.state;
    value++;
    this.setState({ value });
  };
  hanldeDecrement = () => {
    let { value } = this.state;
    if (value !== 0) {
      value--;
      this.setState({ value });
    }
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatLebel()}</span>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={this.hanldeIncrement}
        >
          Increment
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={this.hanldeDecrement}
        >
          Decrement
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses = () => {
    let classes = "m-2 badge bg-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  };
  formatLebel = () => {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  };
}

export default Counter;
