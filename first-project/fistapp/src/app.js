import React from "react";
import AddUll from "./components/addUl";



class App extends React.Component {
    render() {
        return <div>
            <ul>
                <div className="rows">
                    <AddUll name="abolfazl" lastName="mohseni" age="16" />
                    <AddUll name="ali" lastName="mohseni" age="14" />
                </div>
                <div className="rows">
                    <AddUll name="reza" lastName="mohseni" age="21" />
                    <AddUll name="danyal" lastName="hoseyni" age="15" />
                </div>
                <div className="rows">
                    <AddUll name="amir" lastName="mohseni" age="19" />
                </div>
            </ul>
        </div>
    }
}

export default App;