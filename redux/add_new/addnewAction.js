export const ADD_NEW = 'ADD_NEW';
export const ADD_NEW_FAILURE = 'ADD_NEW_FAILURE';
export const ADD_NEW_LOADING = 'ADD_NEW_LOADING';

export const add_new = (title, data) => {
    return async (dispatch, getState) => {
        //getstate de lay tu reducer ra thawngf user. 
        //trong nay ko xai useselector dc // chi xai getstate

        const user = getState().user.user;
        dispatch({
            type: ADD_NEW_LOADING
        })
        try {
            const response = await fetch('http://10.52.60.76:3000/api/title/posttitle', {
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                    "auth-token": user.token,
                },
                method: 'POST',
                body: JSON.stringify({
                    user_id: user._id,
                    title,
                    data
                })
            })
            //gọi k thành công
            if (!response.ok) {
                const resData = await response.json()
                dispatch({
                    type: ADD_NEW_FAILURE
                })
                throw new Error(resData.err)
            }
            //gọi thành công
            const resData = await response.json()
            dispatch({
                type: ADD_NEW,
                add_new: resData
            })

        }
        catch (err) {
            throw err
        }
    }
}