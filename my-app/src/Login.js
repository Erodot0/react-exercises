import React from "react";

export class Login extends React.Component {
    state = {
        username: "",
        password: "",
        toRemeber: false
    }

    handleNameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleCheckChange = (event) => {
        this.setState({
            toRemeber: event.target.value
        })
    }

    render() {
        return (
            <form>
                <p>Username</p>
                <input type="text" name="username" value={this.state.username} onChange={this.handleNameChange} />
                <p>Password</p>
                <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
                <p>Remeber</p>
                <input type="checkbox" name="checkbox" value={this.state.password} onChange={this.handleCheckChange} />
            </form>
        )
    }
}
