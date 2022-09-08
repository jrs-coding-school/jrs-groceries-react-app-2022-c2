import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './CheckoutSuccess.css'

export default function CheckoutSuccess() {
    return (
        <div className='checkout-success-root'>
            <FontAwesomeIcon icon={faCircleCheck} size='8x' className='success-icon' />
            <h2>Your order is complete!</h2>
            <p>You will be receiving a confirmation e-mail with order details soon</p>
        </div>
    )
}
