import { LOGIN, AUTH_LOADING, AUTH_FAILURE, REGISTER } from './userAction'
const initialState = {
    user: {},
    isLoading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN:
            return {
                ...state,
                user: action.user,
                isLoading: false
            }
        case AUTH_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        case REGISTER:
            return {
                ...state,
                isLoading: false,
            }
    }
    return state
} 