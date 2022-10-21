import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleComment from "./singlecomment";
import uniqid from 'uniqid'
import { addComment, loadComments } from "../redux/actions";
import { LoadComments } from "../redux/commentReducer";
function Comments(props) {
    const [state, setstate] = useState('');
    let dispatch = useDispatch()
    let { comments } = useSelector(state => {
        return state.comments
    })
    function handlerChange(e) {
        setstate(e.target.value)
    }
    function handlerSumbit(e) {
        let id = uniqid()
        e.preventDefault()
        dispatch(addComment(id, state))
    }
    useEffect(() => {
        dispatch(LoadComments())

    }, []);
    // console.log(comments)
    return (
        <div>
            <form onSubmit={(e) => handlerSumbit(e)}>
                <input placeholder="Comment" type="text" value={state} onChange={(e) => handlerChange(e)} />
            </form>
            {comments &&
                comments.map(res => {
                    return <SingleComment key={res.id} data={res} />
                })
            }
        </div>
    )
}
export default Comments