import React from "react";

export class TodoList extends React.Component {
    state = {
        name: ["davide","giacomo","giada","karim","sciuti"],
        inputValue: ""
    }

    handleInputChange = (event) => {
        this.setState({
            inputValue : event.target.value,
        })
    }

    handleBtnClick = () => {
        this.setState({
            name: [...this.state.name, this.state.inputValue],
            inputValue: ""
        })
    }

    handleClearArray = () => {
        this.setState({
            name: [],
            inputValue: ""
        })
    }
    render(){
        return(
            <div>
            <form>
                <input name="inputData" type="text" onChange={this.handleInputChange} value={this.state.inputValue}/>
                <button type="button" onClick={this.handleBtnClick} disabled={!this.state.inputValue}>Send</button>
                <button type="button" onClick={this.handleClearArray} >Clear</button>
            </form>
            <ul >
                {this.state.name.map((name, index) => {
                    return <li key={name + index}>{name}</li>;
                })}
            </ul>                
            </div>

        )
    }
}