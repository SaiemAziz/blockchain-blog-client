import { SORT_SELECT, TAG_REMOVE, TAG_SELECT } from "../actionTypes/blogActionTypes"

const initialState = {
    sort: "desc",
    tag: "all"
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_SELECT : 
            return {
                ...state,
                sort: action.payload
            }
        case TAG_SELECT : 
            // if(state.tag !== action.payload)
            return {
                ...state,
                tag: action.payload
            }
        default: 
            return state
    }
} 


export default filterReducer