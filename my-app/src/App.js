import React from "react";
import "./index.css"
// import { Sum } from "./components/Sum";
// import { Container } from "./components/Container";
// import { DisplayLanguage } from "./components/DisplayLanguage";
// import { LanguageContext } from "./components/LanguageContext";
import { Counter } from "./components/Counter";
// import { HelloWorld } from "./components/HelloWorld";
// import { Welcome } from "./components/Welcome";
// import { InteractiveWelcome } from "./components/InteractiveWelcome";
// import { Login } from "./components/Login";
// import { UncontrolledLogin } from "./components/UncontrolledLogin";
// import { TodoList } from "./components/TodoList";
// import { GithubUser } from "./components/GithubUser"
// import { GithubUserList } from "./components/GithubUserList"

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
            <div className="container">
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
                {/* <Welcome name="john" age="12"/> */}
                {/* <Sum numbers={[1,2,3,4,5,6]}/> */}
                <Counter initialValue={0} incrementAmount={1} incrementInterval={1000}/>
                {/* <GithubUser username="Erodot0"/> */}
                {/* <GithubUserList /> */}
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