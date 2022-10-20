import React from "react";

export class Login extends React.Component {
  // creating state
  state = {
    username: "",
    password: "",
    remember: false,
  };
  // handling events
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  resetInput = () => {
    this.setState({
        username: "",
        password:"",
        checked: false
    })
  }

  handleLogin = () => {
    this.props.onLogin(this.state ? this.state : console.error("login error"));
  };

  render() {
    const myStyle = {
      backgroundColor: this.state.password.length < 8 ? "red" : "green",
      color: "white",
      padding: "10px"
    }
    return (
      <form>

        <p>Username</p>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />

        <p>Password</p>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />

        <p>Remeber</p>
        <input
          type="checkbox"
          name="remember"
          checked={this.state.remember}
          onChange={this.handleInputChange}
        />

        <button
        type="button"
        onClick={this.resetInput}
        >
            Reset
        </button>
        <button
          type="button"
          disabled={!(this.state.username && this.state.password)}
          onClick={this.handleLogin}
          style={myStyle}
        >
          LogIn
        </button>
      </form>
    );
  }
}
