import _posts from "../data/posts";
import { combineReducers } from "redux";
// const postReducer = function getPost(state = posts, action) {
//     console.log(action.index)
//     return state
// }
const comments = (state = {}, action) => {
  if (action.type === "ADD_COMMENT") {
    if (!state[action.postId]) {
      return { ...state, [action.postId]: [action.comment] };
    } else {
      return {
        ...state,
        [action.postId]: [...state[action.postId], action.comment],
      };
    }
  } else if (action.type === "LOAD_COMMENTS") {
    return action.comments;
  } else return state;
};

const posts = (state = _posts, action) => {
  console.log(action);

  switch (action.type) {
    case "REMOVE_POST":
      return state.filter((post) => post.id !== action.id);
    //   return [
    //     ...state.slice(0, action.index),
    //     ...state.slice(action.index + 1),
    //   ];
    case "ADD_POST":
      return [...state, action.post];
    case "LOAD_POSTS":
      return action.posts;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ posts, comments });
export default rootReducer;
