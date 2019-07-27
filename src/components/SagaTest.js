/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";

import { fetchDog } from "../reducers/fetchDog";

// Component
class SagaTest extends React.Component {
  render() {
    const { reducerDog } = this.props;

    return (
      <div>
        <button onClick={() => this.props.dispatch(fetchDog())}>
          Show Dog
        </button>
        {reducerDog.loading ? (
          <p>Loading...</p>
        ) : reducerDog.error ? (
          <p>Error, try again</p>
        ) : (
          <p>
            <img src={reducerDog.url} />
          </p>
        )}
      </div>
    );
  }
}

export default connect(state => {
  return state;
})(SagaTest);
