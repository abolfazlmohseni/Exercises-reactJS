const sleep = time => new Promise(resolve => setTimeout(resolve, time))


export const getuser = (username, password) => sleep(1000).then(() => {
    if ('abolfazl' === username && 121358 === password) {
        return {
            id: 1,
            username,
            email: "abolfazl@gmail.com"
        }
    }
    return null
})