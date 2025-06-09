import { createStore } from "redux"
import Todo from "./components/todo"
const initState = [
    {
        id: 1,
        text: 'Task 1',
        completed: false
    },
    {
        id: 2,
        text: 'Task 2',
        completed: false
    },
    {
        id: 3,
        text: 'Task 3',
        completed: true
    }
]



const todo = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        default:
            return state
    }
}

const store = createStore(todo)

const test = () => {
    return <Todo store={store} />

}

export default test
