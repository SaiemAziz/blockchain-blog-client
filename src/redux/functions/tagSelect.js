import { TAG_REMOVE, TAG_SELECT } from "../actionTypes/blogActionTypes"

export const tagSelect = (newTag) => {
        return {
            type: TAG_SELECT,
            payload: newTag
        }
}