import React from "react";

export class ClickCounter extends React.Component {
    state = {
        count: this.props.count 
    }

    handleCounterIncrement = () => {
        this.setState(state => {
            return {
                count: state.count + 1
            }
        })
    }

    render() {
        return <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleCounterIncrement}>Click here!</button>
        </div>
    }
}