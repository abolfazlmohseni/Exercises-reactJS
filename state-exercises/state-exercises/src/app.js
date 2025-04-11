import React from "react";
import Clock from "./components/clock";

export default class dive extends React.Component {
    render(props) {
        return <div className="conteyner">
            <h1>hello user</h1>
            <Clock />
        </div>
    }
}


