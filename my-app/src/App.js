import "./index.css"
import React from "react";
import { FilteredList } from "./components/FilteredList";


const List = [
    { name: "Jaman", age: 21, id: 1},
    { name: "Matea", age: 20, id: 2},
    { name: "Giacomo", age: 19, id: 3},
    { name: "Asdrubale", age: 18, id: 4},
    { name: "Pierino", age: 17, id: 5},
]

export class App extends React.Component {
    render() {
        return (
            <div className="container">
                <FilteredList list={List}/>
            </div>
        )
    }
}