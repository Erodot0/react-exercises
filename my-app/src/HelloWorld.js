import React from "react"
import { Message } from "./Msg"

export class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <Message />
            </div>
        )
    }
}