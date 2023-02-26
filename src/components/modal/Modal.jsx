import React from 'react'
import './Modal.css'

export const Modal = ({ children }) => {
    return (
        <div className='background'>
            {children}
        </div>
    )
}
