import getContentDB from "./getContentDB"

const { ADD_CONTENT, GET_CONTENT } = require("../actionTypes/blogActionTypes")

const updateContentDB = (content, id) => {
    return async (dispatch, getState) => {
        let res = await fetch(`${process.env.REACT_APP_BACKEND}blogs?id=${id}`,{
            headers: {
                "Content-Type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify(content)
        })
        let data = await res.json()
        if(data?.result?.acknowledged)
            dispatch(getContentDB())
    }
}

export default updateContentDB