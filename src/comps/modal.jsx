import { Formik } from "formik";
import React from "react";
import { AddTask } from "../state";
import style from './styles.module.css'

function Modal(props) {
    return (
        <div className={style.modal}>
            <button className={style.close_modal}
                onClick={() => (props.setModal(false))}
            >X</button>
            <div className={style.modal_body}>
                <Formik
                    initialValues={{
                        task: ''
                    }}
                    onSubmit={(values) => (
                        AddTask(values,props.setModal,props.setstate)
                    )}
                >
                    {({ values, handleChange, handleSubmit }) => (
                        <>
                            <p>
                                <input type={"text"}
                                    name={'task'}
                                    value={values.task}
                                    onChange={handleChange}
                                    placeholder={'task'} />
                            </p><br />
                            <button type={"submit"}
                                onClick={handleSubmit}
                            >Add Task</button>
                        </>
                    )}

                </Formik>
            </div>
        </div>
    )
}
export default Modal 