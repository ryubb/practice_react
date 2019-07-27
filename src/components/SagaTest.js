/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";

import { fetchDog } from "../reducers/index";

// Component
class SagaTest extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.dispatch(fetchDog())}>
          Show Dog
        </button>
        {this.props.loading ? (
          <p>Loading...</p>
        ) : this.props.error ? (
          <p>Error, try again</p>
        ) : (
          <p>
            <img src={this.props.url} />
          </p>
        )}
      </div>
    );
  }
}

export default connect(state => {
  console.log(state);
  return state;
})(SagaTest);
