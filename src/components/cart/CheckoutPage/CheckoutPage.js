import React from 'react'
import OrderTotal from './OrderTotal'
import './CheckoutPage.css'
import MultiStepForm from '../../formStep/MultiStepForm'

export default function CheckoutPage() {
    return (
        <div className='checkout-page'>
            <div className='info-form'>
                <h1>
                    Customer Information
                </h1>
                <MultiStepForm />
            </div>
            <div className='order-total'>
                <h1>
                    Order Total
                </h1>
                <OrderTotal />
            </div>
        </div>
    )
}
