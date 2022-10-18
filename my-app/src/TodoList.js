import React, {createRef} from "react";

export class TodoList extends React.Component {
    _inputDataRef = createRef()

    state = {
        name: ["1","2","3"]
    }

    handleInputValue = () => {
        const inputData = this._inputDataRef.current.value

        this.setState({
            name: [...this.state.name, inputData]
        })
    }
    render(){
        return(
            <div>
            <form>
                <input name="inputData" type="text" ref={this._inputDataRef} />
                <button type="button" onClick={this.handleInputValue}>Send</button>
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