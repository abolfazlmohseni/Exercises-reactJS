import React, { Component } from "react";
import Buttons from "./components/buttonCom"
import Inputs from "./components/inputs";


export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Buttons />
                </div>
                <div>
                    <Inputs />
                </div>
            </div>
        )
    }
}