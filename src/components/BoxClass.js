import React, { Component } from "react";

export default class BoxClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.title === "Computer" &&
      nextProps.result !== "tie" &&
      nextProps.result !== ""
    ) {
      return {
        result: nextProps.result === "win" ? "lose" : "win",
      };
    }
    return {
      result: nextProps.result,
    };
  }

  render() {
    return (
      <div className={`box ${this.state.result}`}>
        <h1>{this.props.title}</h1>
        <h2 data-testid="item-name">
          {this.props.item && this.props.item.name}
        </h2>
        <img className="item-img" src={this.props.item && this.props.item.img} />
        <h2>{this.state.result}</h2>
      </div>
    );
  }
}