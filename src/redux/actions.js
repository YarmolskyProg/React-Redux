import { productsApi } from "../api/api";
import { ADD_COMMENT, ADD_LIKES, DELETE_COMMENT, INPUT_TEXT, LOAD_COMMENTS, RED_COMMENT, REMOVE_LIKES } from "./types";

export function addLikes() {
    return {
        type: ADD_LIKES
    }
}
export function removeLikes() {
    return {
        type: REMOVE_LIKES
    }
}
export function inputText(text) {

    return {
        type: INPUT_TEXT,
        text: text
    }
}
export function addComment(id, comment) {
    return {
        type: ADD_COMMENT,
        data: { id, comment }
    }
}
export function redComment(id, comment) {
    return {
        type: RED_COMMENT,
        data: { id, comment }
    }
}
export function delComment(id) {
    return {
        type: DELETE_COMMENT,
        id: id
    }
}
export function loadComments(data) {
    return {
        type: LOAD_COMMENTS,
        data: data
    }
}