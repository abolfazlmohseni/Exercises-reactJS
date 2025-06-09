import { createStore } from 'https://unpkg.com/redux/dist/redux.browser.mjs';

// const createStore = (redcuer) => {
//     let state
//     let listeners = []

//     const dispatch = (action) => {
//         state = redcuer(state, action)
//         listeners.forEach(listener => listener())
//     }
//     const getState = () => state

//     const subscribe = (listener) => {
//         listeners.push(listener)

//         return () => {
//             listeners = listeners.filter(l => l !== listener)
//         }
//     }
//     dispatch({})

//     return { dispatch, getState, subscribe }
// }

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const store = createStore(counter)
const render = ()=> document.body.innerText =store.getState()
const unSubscribe = store.subscribe(render)
render()
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })
