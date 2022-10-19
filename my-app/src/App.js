import React from "react";
// import { Counter } from "./Counter";
// import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";
// import { InteractiveWelcome } from "./InteractiveWelcome";
// import { Login } from "./Login";
// import { UncontrolledLogin } from "./UncontrolledLogin";
import { TodoList } from "./TodoList";

export class App extends React.Component {
    render() {
        return (
            <div>
                {/* <HelloWorld /> */}
                <Welcome name="john" age="12"/>
                {/* <Counter initialValue={0} incrementAmount={1} incrementInterval={1000}/> */}
                {/* <InteractiveWelcome /> */}
                {/* <Login /> */}
                {/* <UncontrolledLogin /> */}
                {/* <TodoList /> */}
            </div>
        )
    }
}