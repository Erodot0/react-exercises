import React from "react";
// import { Container } from "./Container";
// import { DisplayLanguage } from "./DisplayLanguage";
// import { LanguageContext } from "./LanguageContext";
// import { Counter } from "./Counter";
// import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";
// import { InteractiveWelcome } from "./InteractiveWelcome";
// import { Login } from "./Login";
// import { UncontrolledLogin } from "./UncontrolledLogin";
// import { TodoList } from "./TodoList";

export class App extends React.Component {
    state = {
        language: "en"
    }

    handleLangChange = (event) => {
        this.setState({
            language: event.target.value
        })
    }
    render() {
        return (
            <div>
                {/* <div className="langselector">
                    <select value={this.state.language} onChange={this.handleLangChange}>
                        <option value="en">English</option>
                        <option value="it">Italian</option>
                    </select>
                    <LanguageContext.Provider value={this.state.language}>
                        <DisplayLanguage />
                    </LanguageContext.Provider>
                </div> */}
                {/* <HelloWorld /> */}
                <Welcome name="john" age="12"/>
                {/* <Counter initialValue={0} incrementAmount={1} incrementInterval={1000}/> */}
                {/* <InteractiveWelcome /> */}
                {/* <Login /> */}
                {/* <UncontrolledLogin /> */}
                {/* <TodoList render={(name,remove) => {
                    return (
                            <ul>
                                {name.map((name, index) => <li key={name + index}>{name}
                                    <button onClick={remove}>Remove</button></li>)}
                            </ul>
                    )
                }} /> */}
                {/* <Container title="A nice container"/> */}
            </div>
        )
    }
}