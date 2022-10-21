import { productsApi } from "../api/api"
import { loadComments } from "./actions"
import { ADD_COMMENT, DELETE_COMMENT, LOAD_COMMENTS, RED_COMMENT } from "./types"

const initialState = {
    comments: []
}

let commentReducer = (state = initialState, type) => {
    switch (type.type) {
        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, type.data]
            }
        case RED_COMMENT: {
            let result = state.comments.findIndex(res => res.id === type.data.id)
            let newComment = [
                ...state.comments.slice(0, result),
                type.data,
                ...state.comments.slice(result + 1)
            ]

            return {
                ...state,
                comments: newComment
            }
        }
        case DELETE_COMMENT: {
            let result = state.comments.filter(el => el.id != type.id)
            return {
                ...state,
                comments: result
            }
        }
        case LOAD_COMMENTS: {
            return {
                ...state,
                comments: type.data
            }
        }
        default:
            return state
    }
}

export default commentReducer

export let LoadComments = () => {
    return (dispatch) => {
        productsApi.getProducts().then(res => {
            dispatch(loadComments(res.map(e => {
                return {
                    id: e.id,
                    comment: e.name
                }
            }
            )))
        })
    }
}