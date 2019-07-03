import React from "react";
import { connect } from "react-redux";

import { increment, decrement } from "../redux/counterAction";

class LabbaseSTGAxios extends React.Component {
  render() {
    return (
      <div>
        <p>Clicked: {this.props.counter}</p>
        <button onClick={this.props.increment}>increment</button>
        <button onClick={this.props.decrement}>derement</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LabbaseSTGAxios);
