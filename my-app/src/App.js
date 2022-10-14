import React from "react";
import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";

const name = <strong>Jaman</strong>

export class App extends React.Component {
    render() {
        return (
            <div>
                <HelloWorld />
                <Welcome name={name} age="64"/>
            </div>
        )
    }
}