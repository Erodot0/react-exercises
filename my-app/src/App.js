import React from "react";
import { Counter } from "./Counter";
import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render() {
        return (
            <div>
                <HelloWorld />
                <Welcome name="john" age="12"/>
                <Counter initialValue={0} incrementAmount={1} incrementInterval={1000}/>
            </div>
        )
    }
}