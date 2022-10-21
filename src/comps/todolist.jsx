import React, { useState } from "react";
import { AddTask, DellAll, tasks } from "../state";
import TodoItem from "./todoitem";
import style from './styles.module.css'
import Modal from "./modal";
function TodoList() {
    let [state, setstate] = useState(tasks);
    let [modal, setModal] = useState(false);
    return (
        <div className={style.wrapper}>
            {modal && (
                <Modal setModal={setModal} setstate={setstate}/>
            )}

            {tasks.map((item, index) => (
                <TodoItem task={item} key={index} setstate={setstate} state={state} />
            ))}
            <button onClick={() => DellAll(setstate)} className={style.btn}>Del all</button>
            <button onClick={() => (setModal(true))} className={style.addTask} >Add Task</button>
        </div>
    )
}

export default TodoList
