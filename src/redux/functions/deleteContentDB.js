import getContentDB from "./getContentDB"

const { DELETE_CONTENT, GET_CONTENT } = require("../actionTypes/blogActionTypes")

const deleteContentDB = (id) => {
    return async (dispatch, getState) => {
        let res = await fetch(`${process.env.REACT_APP_BACKEND}blogs?id=${id}`,{
            headers: {
                "Content-Type": "application/json"
            },
            method: "DELETE",
        })
        let data = await res.json()
        if(data?.result?.acknowledged)
            dispatch(getContentDB())
    }
}

export default deleteContentDB