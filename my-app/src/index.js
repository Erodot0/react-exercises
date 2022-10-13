import ReactDom from "react-dom";
import { HelloWorld } from "./HelloWorld";

const helloWorldElement = <HelloWorld />
const root = document.querySelector("#root")

ReactDom.render(helloWorldElement, root)

