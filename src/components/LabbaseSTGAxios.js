import React from "react";
import { connect } from "react-redux";

import { doLogin, fetchStudentMe } from "../redux/login";

class LabbaseSTGAxios extends React.Component {
  login() {
    this.props.doLogin();
  }

  fetchStudentMe() {
    this.props.fetchStudentMe(this.props.accessToken);
  }

  render() {
    const { accessToken, globalState } = this.props;
    console.log(globalState);

    return (
      <div>
        <button onClick={() => this.login()}>Login!</button>
        <button onClick={() => this.fetchStudentMe()}>fetchStudentMe!!</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  globalState: state,
  accessToken: state.data && state.data.accessToken
});

const mapDispatchToProps = dispatch => {
  return {
    doLogin: () => dispatch(doLogin()),
    fetchStudentMe: accessToken => dispatch(fetchStudentMe(accessToken))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LabbaseSTGAxios);
