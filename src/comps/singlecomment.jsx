import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { delComment, redComment } from "../redux/actions";
function SingleComment(props) {
    const [state, setstate] = useState('');
    useEffect(() => {
        if (props.data.comment) {
            setstate(props.data.comment)
        }
    }, [props.data.comment]);
    let dispatch = useDispatch()
    function handlerChange(e) {
        setstate(e.target.value)
    }
    function handlerSumbit(e) {
        e.preventDefault()
        dispatch(redComment(props.data.id, state))
    }
    function handlerDelete() {
        dispatch(delComment(props.data.id))
    }

    return (
        <div>
            <form onSubmit={e => handlerSumbit(e)} >
                <input type="text" onChange={(e) => { handlerChange(e)}} value={state} />
                <input type='button' onClick={() => { handlerDelete() }} value='&times;'/>
            </form>
        </div>
    )
}

export default SingleComment