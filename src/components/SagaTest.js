/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";

import { fetchDog } from "../reducers/fetchDogs";

// Component
class SagaTest extends React.Component {
  render() {
    const { reducer } = this.props;

    return (
      <div>
        <button onClick={() => this.props.dispatch(fetchDog())}>
          Show Dog
        </button>
        {reducer.loading ? (
          <p>Loading...</p>
        ) : reducer.error ? (
          <p>Error, try again</p>
        ) : (
          <p>
            <img src={reducer.url} />
          </p>
        )}
      </div>
    );
  }
}

export default connect(state => {
  // console.log(state);
  return state;
})(SagaTest);
