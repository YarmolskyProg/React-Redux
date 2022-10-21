import { ADD_LIKES, REMOVE_LIKES } from "./types"

const initialState = {
    likes: 0
}

let likesReducer = (state = initialState, type) => {
    switch (type.type) {
        case ADD_LIKES:
            return {
                ...state,
                likes: state.likes + 1
            }
        case REMOVE_LIKES:
            return {
                ...state,
                likes: state.likes - 1
            }
        default:
            return state
    }
}

export default likesReducer