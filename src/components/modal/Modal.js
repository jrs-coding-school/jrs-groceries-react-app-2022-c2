import React from 'react'
import './modal.css'

export default function Modal({ title, children }) {
    return (
        <div className="modal-root">
            <div className="modal">
                <h2>{title}</h2>
                {children}
            </div>
        </div>
    )
}
