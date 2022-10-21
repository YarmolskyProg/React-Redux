import React, { useState } from "react";
let Counter = () => {
    let [state, setstate] = useState(0);
    let plus = () => {
        setstate(
            state = state + 1
        )
    }
    let minus = () => {
        setstate(
            state = state - 1
        )
    }
    return (
        <div>
            <p>{state}</p>
            <button onClick={() => plus()}>+</button>
            <button onClick={() => minus()}>-</button>
        </div>
    )
}
export default Counter