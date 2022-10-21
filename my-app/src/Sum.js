import React from "react"

export function Sum(props){
    return(
        <h1>
            {props.numbers.reduce((a,b) => a + b)}
        </h1>
    )
}