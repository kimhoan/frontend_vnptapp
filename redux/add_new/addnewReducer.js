import { ADD_NEW, ADD_NEW_FAILURE, ADD_NEW_LOADING } from './addnewAction';
const initialState = {
    add_new: {},
    isLoading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case ADD_NEW:
            return {
                ...state,
                add_new: action.add_new,
                isLoading: false,
            }
        case ADD_NEW_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
    }
    return state
}