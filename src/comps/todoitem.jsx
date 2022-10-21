import React from "react";
import { delItem, tasks, toggleTodo } from "../state";
import style from './styles.module.css'
function TodoItem(props) {
    let classes = []
    if (props.task.changed) {
        classes.push('done')
    }
    return (
        <>
            <p className={style.item}>
                <span className={props.task.changed ? style.done : ''}>
                    <input onChange={() => (
                        (toggleTodo(props.task.id,props.setstate))
                        
                    )}
                        checked={props.task.changed}

                        type="checkbox" id={props.task.id} />
                    {' '}
                    {props.task.message}
                </span>
                <button onClick={() => (
                    delItem(props.task.id),
                    props.setstate(tasks)
                )}>-</button>
            </p>

        </>
    )
}
export default TodoItem
