import React from "react";
import { ClickTracker } from "./ClickTracker";
import { ClickCounter } from "./ClickCounter";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
    state = {
        count: this.props.initialValue 
    }

    componentDidMount(){
        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + this.props.incrementAmount
                }
            })
        }, this.props.incrementInterval)
    }
    render() {
        return <div>
            {/* <CounterDisplay count={this.state.count} /> */}
            <ClickCounter  initialValue={this.props.initialValue} count={this.state.count} />
            {/* <ClickTracker/> */}
        </div>
    }
}