import React, { useRef } from 'react'
import './modal.css'

export default function Modal({ title, children, toggleModalOpen }) {

    const backgroundRef = useRef()

    function handleBGClicked(e) {
        if (e.target == backgroundRef.current) {
            toggleModalOpen()
        }
    }

    return (
        <div className="modal-root" ref={backgroundRef} onClick={handleBGClicked}>
            <div className="modal">
                <h2>{title}</h2>
                {children}
            </div>
        </div>
    )
}
