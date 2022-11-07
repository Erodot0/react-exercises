import { useState } from "react"

export function useCounter(initialValue){
    const [counter, setCounter] = useState(initialValue)

    function resetCounter(){
        setCounter(initialValue)
    }

    function handleCounterIncrement(){
        setCounter(c => c + 1)
    }

    function handleCounterDecrease(){
        setCounter(c => c - 1)
    }
 return {
    counter: counter,
    onIncrement: handleCounterIncrement,
    onDecrement: handleCounterDecrease,
    onReset: resetCounter,
 }
}