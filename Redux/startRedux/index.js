const createStore = (redcuer) => {
    let state
    let listeners = []

    const dispatch = (action) => {
        state = redcuer(state, action)
        listeners.forEach(listener => listener())
    }
    const getState = () => state

    const subscribe = (listener) => {
        listeners.push(listener)

        return () => {
            listeners = listeners.filter(l => l !== listener)
        }
    }
    dispatch({})

    return { dispatch, getState, subscribe }
}

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

const unSubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
unSubscribe()
store.dispatch({ type: 'DECREMENT' })
