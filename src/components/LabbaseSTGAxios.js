import React from "react";
import { connect } from "react-redux";

import { doLogin } from "../redux/login";

class LabbaseSTGAxios extends React.Component {
  //   login() {
  //     console.log("test");
  //     this.props.studentLoginSuccess("u.str.gm@gmail.com", "Test1234");
  //   }

  clickSetName() {
    this.props.doLogin();
  }

  clickSetAge() {
    this.props.setAge(30);
  }

  render() {
    const { state } = this.props;
    console.log(state);

    return (
      <div>
        <button onClick={() => this.clickSetName()}>Set Name</button>
        <button onClick={() => this.clickSetAge()}>Set Age</button>
        {/* <button onClick={() => this.login()}>fetch</button> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => {
  return {
    // studentLoginSuccess: () => dispatch()
    doLogin: name => dispatch(doLogin(name))
    // setAge: age => dispatch(setAge(age))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LabbaseSTGAxios);
