import React from "react";
import AddUll from "./components/addUl";

const userdeta = [
    { name: "abolfazl", lastName: "mohseni", age: 16 },
    { name: "ali", lastName: "mohseni", age: 14 },
    { name: "reza", lastName: "mohseni", age: 21 },
    { name: "danyal", lastName: "hoseyni", age: 15 },
    { name: "amir", lastName: "mohseni", age: 19 }
]

const user = userdeta.map((user, index) => {
    return <AddUll key={index} name={user.name} lastName={user.lastName} age={user.age} />
})
console.log(user);


class App extends React.Component {
    render() {
        return <div>
            <ul>
                <div className="rows">
                    {user[0]}
                    {user[1]}
                </div>
                <div className="rows">
                    {user[2]}
                    {user[3]}
                </div>
                <div className="rows">
                    {user[4]}
                </div>
            </ul>
        </div>
    }
}

export default App;