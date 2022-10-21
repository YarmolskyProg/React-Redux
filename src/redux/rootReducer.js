import { combineReducers } from "redux";
import commentReducer from "./commentReducer";
import likesReducer from "./likesReducer";
import titleReducer from "./titleReducer";

export const rootReducer = combineReducers({
    likes:likesReducer,
    text:titleReducer,
    comments:commentReducer
})