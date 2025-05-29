const instances = {}

export function register(id, callback) {
    instances[id] = callback
}
export function unregister(id) {
    delete instances[id]
}

export function historyPushState(to, state = {}, titel = "") {
    window.history.pushState(state, titel, to);

    Object.keys(instances).forEach(id => instances[id]())

}