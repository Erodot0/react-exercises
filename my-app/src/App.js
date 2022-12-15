import "./index.css"
import React from "react";
import { CarDetails } from "./components/CarDetails";

const data = {
    model: "ferrari",
    year: 2018,
    color: "red"
}

export class App extends React.Component {
    render() {
        return (
            <div className="container">
                <CarDetails data={data}/>
            </div>
        )
    }
}