import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import "./RequestForm.css"

const validationSchema = Yup.object({
    firstName: Yup.string()
        .max(15, 'No more than 15 characters')
        .required('Required field'),
    lastName: Yup.string()
        .max(20, 'No more than 15 characters')
        .required('Required field'),
    email: Yup.string().email('Invalid email adress').required('Required field'),
    message: Yup.string()
        .max(40, 'No more than 15 characters.')
        .required('Required field'),
    phone: Yup.string().min(12, 'Only +7XXXXXXXXXX format')
        .max(12, 'Only +7XXXXXXXXXX format')
        .required('Required field'),
})

const RequestForm = ({ title, closeModal, sendRequest }) => {

    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        phone: '+7'
    }

    const handleForm = (values) => {
        console.log(JSON.stringify(values, null, 2), '<== values to send')
        sendRequest(values)
    }

    return (
        <Formik
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={handleForm}
        >
            {formik => (
                <div>
                    <form onSubmit={formik.handleSubmit} className="form">
                        <div className='form-header'><span className='form_title'>{title}</span></div>

                        <div className='form-control'>
                            <label htmlFor="firstName">Name<span className='required'>*</span></label>
                            <input
                                className={`${formik.errors.firstName && 'color' && formik.touched.firstName && 'color'}`}
                                id="firstName"
                                type="text"
                                {...formik.getFieldProps('firstName')}
                            />
                            {formik.touched.firstName && formik.errors.firstName ? (
                                <div className='error-message'>{formik.errors.firstName}</div>
                            ) : null}
                        </div>

                        <div className='form-control'>
                            <label htmlFor="lastName">LastName<span className='required'>*</span></label>
                            <input
                                className={`${formik.errors.lastName && 'color' && formik.touched.lastName && 'color'}`}
                                id="lastName"
                                type="text"
                                {...formik.getFieldProps('lastName')}
                            />
                            {formik.touched.lastName && formik.errors.lastName ? (
                                <div className='error-message'>{formik.errors.lastName}</div>
                            ) : null}
                        </div>

                        <div className='form-control'>
                            <label htmlFor="email">Email<span className='required'>*</span></label>
                            <input
                                className={`${formik.errors.email && 'color' && formik.touched.email && 'color'}`}
                                id="email"
                                type="email"
                                {...formik.getFieldProps('email')} />
                            {formik.touched.email && formik.errors.email ? (
                                <div className='error-message'>{formik.errors.email}</div>
                            ) : null}
                        </div>

                        <div className='form-control'>
                            <label htmlFor="phone">Phone<span className='required'>*</span></label>
                            <input
                                className={`${formik.errors.phone && 'color' && formik.touched.phone && 'color'}`}
                                id="phone"
                                type="text"
                                {...formik.getFieldProps('phone')} />
                            {formik.touched.phone && formik.errors.phone ? (
                                <div className='error-message'>{formik.errors.phone}</div>
                            ) : null}
                        </div>

                        <div className='form-control'>
                            <label htmlFor="message">Message<span className='required'>*</span></label>
                            <textarea
                                className={`${formik.errors.message && 'color' && formik.touched.message && 'color'}`}
                                id="message"
                                type="text"
                                {...formik.getFieldProps('message')}
                            />
                            {formik.touched.message && formik.errors.message ? (
                                <div className='error-message'>{formik.errors.message}</div>
                            ) : null}
                        </div>

                        <div className='buttons'>
                            <button className='submit-btn' type="submit">Send</button>
                            <button className='cancel-btn' onClick={() => closeModal()} type="button">Cancel</button>
                        </div>
                    </form>
                </div>
            )}
        </Formik>
    );
};

export default RequestForm