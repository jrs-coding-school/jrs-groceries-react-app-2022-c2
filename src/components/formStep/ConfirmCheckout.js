import React from 'react'
import { Link } from 'react-router-dom'
import './ConfirmCheckout.css'


export default function ConfirmCheckout({ contactFormData, shippingFormData, billingFormData, onBackClicked, onSubmit }) {

    return (

        <div className='confirm-root'>
            <h2>Contact Info</h2>
            <ul className='confirmation-container'>
                <li>
                    <b>E-Mail: </b>
                    {contactFormData.email}
                </li>
                <li>
                    <b>Name: </b> {contactFormData.name}
                </li>
                <li>
                    <b>Phone Number: </b> {contactFormData.phoneNumber}
                </li>
            </ul>
            <hr />
            <h2>Shipping Info</h2>
            <ul className='confirmation-container'>
                {shippingFormData.name}
                <br />
                {shippingFormData.address1}
                {shippingFormData.address2 || ''}
                <br />
                {shippingFormData.city}, {shippingFormData.state}
                <br />
                {shippingFormData.zipCode}
                <br />
                <br />
                {shippingFormData.deliveryInstructions}
            </ul>
            <hr />
            <h2>Billing Info</h2>
            <h4>Billing Address</h4>
            <ul className='confirmation-container'>
                {billingFormData.address1}
                {billingFormData.address2 || ''}
                <br />
                {billingFormData.city}, {shippingFormData.state}
                <br />
                {billingFormData.zipCode}
                <br />
            </ul>

            <h4>Card Info</h4>
            <ul className='confirmation-container'>
                <li>
                    <b>Cardholder Name: </b> {billingFormData.cardholderName}
                </li>
                <li>
                    <b>Card Number: </b>**** **** **** {billingFormData.cardNumber4}
                </li>
                <li>
                    <b>Expiration Date: </b>{billingFormData.expirationMonth}/{billingFormData.expirationYear}

                </li>
                <li>
                    <b>CVV: </b> {billingFormData.cvv}
                </li>
            </ul>

            <div className='btn-container'>
                <button type='button'
                    className='left-btn'
                    onClick={() => {
                        onBackClicked && onBackClicked();
                    }}>
                    &#8592; Back To billing Info
                </button>

                <button className='right-btn' type='button' onClick={() => {
                    onSubmit();
                }}>
                    Confirm checkout
                </button>
            </div>

        </div>
    )
}
