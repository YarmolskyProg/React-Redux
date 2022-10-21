import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputText } from "../redux/actions";
function Title(props) {
    const text=useSelector(state=>{
        let text=state.text.text
        return text
    })
    const dispatch = useDispatch()
    function onChange(e) {
        dispatch(inputText(e.target.value))

        // console.log(e.target.value)

    }
    return (
        <div>
            <input type="text" onChange={e => onChange(e)} />
            <p>{text}</p>
        </div>
    )
}

export default Title