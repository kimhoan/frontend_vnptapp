import { AsyncStorage } from 'react-native'
export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const AUTH_LOADING = 'AUTH_LOADING';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const login = (email, password) => {
    return async (dispatch) => {
        dispatch({
            type: AUTH_LOADING
        })
        try {
            const response = await fetch('http://10.52.60.76:3000/api/user/login', {
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password
                })
            })
            //gọi k thành công
            if (!response.ok) {
                const resData = await response.json()
                dispatch({
                    type: AUTH_FAILURE
                })
                throw new Error(resData.err)
            }
            //gọi thành công
            const resData = await response.json()
            dispatch({
                type: 'LOGIN',
                user: resData
            })

        }
        catch (err) {
            throw err
        }
    }
}
//REGISTER
export const register = (name, email, password) => {
    return async (dispatch) => {
        dispatch({
            type: AUTH_LOADING
        })
        try {
            const response = await fetch('http://10.52.60.76:3000/api/user/register', {
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    name, email, password
                })
            })
            if (!response.ok) {
                // dữ liệu lỗi server trả về
                const resData = await response.json()
                dispatch({
                    type: AUTH_FAILURE
                })
                throw new Error(resData.err)
            }
            const resData = await response.json()
            dispatch({
                type: 'REGISTER',
                userRegis: resData
            })

        }
        catch (err) {
            throw err
        }
    }
}