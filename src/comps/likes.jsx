import React from "react";
import {connect} from 'react-redux'
import { addLikes, removeLikes } from "../redux/actions";
let Likes = (props) => {
    return (
        <div>
            <span>Likes:{props.likes}</span>
            <button onClick={props.addLikes}>Like</button>
            <button onClick={props.removeLikes}>Dislike</button>  
        </div>
    )
}
let mapStateToProps=(state)=>{
    return{
        likes:state.likes.likes
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        addLikes:()=>{
            dispatch(addLikes())
        },
        removeLikes:()=>{
            dispatch(removeLikes())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Likes)