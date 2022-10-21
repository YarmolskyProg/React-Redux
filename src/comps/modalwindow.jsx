import React, { useState } from "react";
import style from './styles.module.css'
function ModalWind(props) {
    let [state, setstate] = useState(false);
    let onmodal = () => {
        setstate(true)
    }
    let closemodal = () => {
        setstate(false)
    }
    return (
        <div>
            <button onClick={onmodal}>Modal Wind</button>
            {state &&
                <div className={style.modal}>
                    <div className={style.modal_body}>Modal Window has been opened</div>
                    <button className={style.close_modal} onClick={closemodal}>X</button>
                </div>
            }
        </div>

    )
}

export default ModalWind