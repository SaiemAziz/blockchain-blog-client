import getContentDB from "./getContentDB"

const { ADD_CONTENT, GET_CONTENT } = require("../actionTypes/blogActionTypes")

const addContentDB = (content) => {
    return async (dispatch, getState) => {
        let res = await fetch(`${process.env.REACT_APP_BACKEND}blogs`,{
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(content)
        })
        let data = await res.json()
        if(data?.result?.acknowledged)
            dispatch(getContentDB())
    }
}

export default addContentDB