import React, { Component, Fragment } from "react";
import SimpleReactValidator from "simple-react-validator";
import { handleOnChange } from "../_utils/handleOnChnage";

class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.validator = new SimpleReactValidator();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    handleOnChange(e, [e.target.name], this.state);
    this.setState({ ...this.state });
  };
  handleSubmit = async () => {
    if (this.validator.allValid()) {
      alert("You submitted the form and stuff!");
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      // you can use the autoForceUpdate option to do this automatically`
      this.forceUpdate();
    }
  };
  render() {
    return (
      <Fragment>
        <div>
          <input
            type="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleChange}
          />
          {this.validator.message("Email", this.state.email, "required|email")}
        </div>
        <div>
          <input
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleChange}
          />
          {this.validator.message("Password", this.state.password, "required")}
        </div>

        <button onClick={this.handleSubmit}>Login</button>
      </Fragment>
    );
  }
}

export default Login;
