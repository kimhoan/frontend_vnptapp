export const LOGIN = 'LOGIN'

export const login = (username, password) => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://10.52.60.76:3000/login', {
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    username,
                    password
                })
            })
            if (!response.ok) {
                return alert('Sai tên đăng nhập mật khẩu')
            }
            const resData = await response.json()
            console.log("RES DATA", resData);
            // dispatch qua login ok
            dispatch({
                type: 'LOGIN',
                user: resData.content
            })
        }
        catch { err => console.log(err) }
    }
}