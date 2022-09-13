import React from 'react'
import OrderTotal from './OrderTotal'
import './CheckoutPage.css'
import MultiStepForm from '../../formStep/MultiStepForm'

export default function CheckoutPage() {
    return (
        <div>
            <div className='checkout-page'>
                <div className='info-form'>
                    <MultiStepForm />
                </div>
                <div className='order-total'>
                    <OrderTotal />
                </div>
            </div>
        </div>
    )
}
