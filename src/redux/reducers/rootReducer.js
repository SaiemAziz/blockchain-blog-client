import filterReducer from "./filterReducer";

const { combineReducers } = require("redux");
const { default: blogReducer } = require("./blogsReducer");

const rootReducer = combineReducers({blogs:blogReducer, filters: filterReducer})

export default rootReducer