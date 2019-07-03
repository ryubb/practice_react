import React from "react";
import { connect } from "react-redux";

// import { setName, setAge } from "../redux/userAction.js";
import { doLogin } from "../redux/login";
import { increment, decrement } from "../redux/counterAction";

class LabbaseSTGAxios extends React.Component {
  login() {
    console.log("test");
    this.props.doLogin("u.str.gm@gmail.com", "Test1234");
  }

  // clickSetName() {
  //   this.props.setName("ryu");
  // }

  // clickSetAge() {
  //   this.props.setAge(30);
  // }

  render() {
    return (
      <div>
        {/* {/* <button onClick={this.login.bind(this)}>fetch</button> */}
        <button onClick={this.clickSetName.bind(this)}>SetName</button>
        <button onClick={this.clickSetAge.bind(this)}>SetAge</button> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // name: state.name,
  // age: state.age
});

const mapDispatchToProps = dispatch => {
  return {
    doLogin: (email, password) => dispatch(email, password)
    // setName: name => dispatch(setName(name)),
    // setAge: age => dispatch(setAge(age))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LabbaseSTGAxios);
