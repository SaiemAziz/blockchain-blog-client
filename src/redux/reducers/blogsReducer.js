import {
  ADD_CONTENT,
  DELETE_CONTENT,
  GET_CONTENT,
  READING_HISTORY,
  UPDATE_CONTENT,
} from "../actionTypes/blogActionTypes";

const initialState = {
  blogs: [],
  history: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTENT:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case GET_CONTENT:
      return {
        ...state,
        blogs: action.payload,
      };
    case DELETE_CONTENT:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload._id),
      };
    case UPDATE_CONTENT:
      let blogs = state.blogs.map((blog) => {
        if (blog._id === action.payload._id) {
          return { ...blog, ...action.payload };
        } else return blog;
      });
      return {
        ...state,
        blogs: blogs
      };
    case READING_HISTORY: 
      let history = state.history.filter((h) => h._id !== action.payload)
      let latest = state.blogs.find(b => b._id === action.payload)
      return {
        ...state,
        history: [latest, ...history]
      }
    default:
      return state;
  }
};

export default blogReducer;
