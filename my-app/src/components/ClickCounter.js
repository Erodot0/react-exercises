import React, { useEffect, useState } from "react";

export function ClickCounter({initialValue = 0}){
    const [counter, setCounter] = useState(initialValue)

    useEffect(() =>{
        console.log(`The counter is: ${counter}`)
    },[counter])

    function resetCounter(){
        setCounter(initialValue)
    }

    function handleCounterIncrement(){
        setCounter(c => c + 1)
    }

    return(
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={handleCounterIncrement}>Increase</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    )
}

// export class ClickCounter extends React.Component {
//     state = {
//         count: this.props.count 
//     }

//     handleCounterIncrement = () => {
//         this.setState(state => {
//             return {
//                 count: state.count + 1
//             }
//         })
//     }

//     render() {
//         return <div>
//             <h1>Count: {this.state.count}</h1>
//             <button onClick={this.handleCounterIncrement}>Click here!</button>
//         </div>
//     }
// }