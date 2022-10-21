import { INPUT_TEXT } from "./types"

const initialState = {
    text: ''
}

let titleReducer=(state = initialState, type) => {
    switch (type.type) {

        case INPUT_TEXT:
            
            return {
                ...state,
                text:type.text
            }

        default:
            return state
    }
}

export default titleReducer