import React from "react";
import { Formik } from "formik"
import * as yup from 'yup'

let Login = (props) => {
    const validationShema = yup.object().shape({
        name: yup.string().typeError('Has to be a String').required('Required'),
        secondName: yup.string().typeError('Has to be a String').required('Required'),
        password: yup.string().typeError('Has to be a String').required('Required'),
        email: yup.string().email('Invalid Email').required('Required'),
        confirmEmail: yup.string().email().oneOf([yup.ref('email')], 'Incorrect Email').required('Required'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Incorrect Password').required('Required')
    })
    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    secondName: '',
                    password: '',
                    confirmPassword: '',
                    email: '',
                    confirmEmail: ''
                }}
                validateOnBlur
                validationSchema={validationShema}
                onSubmit={(values) => console.log(values)}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <div>
                        <p>
                            <label htmlFor="name" >Name</label><br />
                            <input type={"text"}
                                name={'name'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                        </p>
                        {touched.name && errors.name && <p>{errors.name}</p>}
                        <p>
                            <label htmlFor="secondName" >SecondName</label><br />
                            <input type={"text"}
                                name={'secondName'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.secondName}
                            />
                        </p>
                        {touched.secondName && errors.secondName && <p>{errors.secondName}</p>}
                        <p>
                            <label htmlFor="password" >Password</label><br />
                            <input type={"password"}
                                name={'password'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                        </p>
                        {touched.password && errors.password && <p>{errors.password}</p>}
                        <p>
                            <label htmlFor="confirmPassword" >Confirm Password</label><br />
                            <input type={"password"}
                                name={'confirmPassword'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                            />
                        </p>
                        {touched.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                        <p>
                            <label htmlFor="email" >Email</label><br />
                            <input type={"email"}
                                name={'email'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </p>
                        {touched.email && errors.email && <p>{errors.email}</p>}
                        <p>
                            <label htmlFor="confirmEmail" >Confirm Email</label><br />
                            <input type={"email"}
                                name={'confirmEmail'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmEmail}
                            />
                        </p>
                        {touched.confirmEmail && errors.confirmEmail && <p>{errors.confirmEmail}</p>}
                        <button
                            disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type={'submit'}
                        >Send</button>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default Login