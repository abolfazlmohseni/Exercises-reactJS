
export const initialState = {
    user: null,
    token: null,
    loading: true,
    error: null
}

export const actiontypes = {
    login_requsest: "login_requsest",
    login_susses: "login_susses",
    login_erorr: "login_erorr",
    logut: "logut"
}

export function reduser(state, action) {
    switch (action.type) {
        case actiontypes.login_requsest:
            return {
                ...state,
                user: null,
                token: null,
                loading: true,
                error: null
            }
            break;
        case actiontypes.login_susses:
            const { user, token } = action.paload
            return {
                ...state,
                user: user,
                token: token,
                loading: false,
                error: null
            }
        case actiontypes.login_erorr:
            return {
                ...state,
                user: null,
                token: null,
                loading: false,
                error: action.paload.error
            }
        case actiontypes.logut:
            return {
                ...state,
                user: null,
                token: null,
                loading: false,
                error: action.paload.error
            }
            break;
    }

}
