import { GET_CONTENT } from "../actionTypes/blogActionTypes"

const getContentDB = () => {
    return async (dispatch, getState) => {
        let res = await fetch(`${process.env.REACT_APP_BACKEND}blogs`)
        let data = await res.json()
        dispatch({type: GET_CONTENT, payload: data?.allBlogs})
    }
}

export default getContentDB