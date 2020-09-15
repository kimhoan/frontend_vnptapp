import { LOGIN } from './testAction'

// trạng thái khởi đầu,ko có user
const initialState = {
    user: {}
}
//sau khi login cập nhật user vào action 
export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.user
            }
    }
    return state
}