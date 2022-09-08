import React from 'react'
import { Link } from 'react-router-dom'


export default function ConfirmCheckout({ contactFormData, shippingFormData, billingFormData, onBackClicked }) {


    return (

        <div>
            <h2>Contact Info</h2>
            <ul>
                <li>
                    <b>E-Mail: </b>
                    {contactFormData.email}
                </li>
                <li>
                    <b>Name: </b> {contactFormData.firstName + ' ' + contactFormData.lastName}
                </li>
                <li>
                    <b>Phone Number: </b> {contactFormData.phoneNumber}
                </li>
            </ul>

            <h2>Shipping Info:</h2>
            <ul>
                {shippingFormData.address1}
                {shippingFormData.address2 || ''}
                <br />
                {shippingFormData.city}, {shippingFormData.state}
                <br />
                {shippingFormData.zipCode}

            </ul>
            <h2>Billing Info</h2>
            <ul>
                <h4>Billing Address</h4>
                {billingFormData.address1}
                {billingFormData.address2 || ''}
                <br />
                {billingFormData.city}, {shippingFormData.state}
                <br />
                {billingFormData.zipCode}
                <br />
            </ul>
            <ul>
                <h4>Card Info</h4>
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
            <button type='button'
                onClick={() => {
                    onBackClicked && onBackClicked();
                }}>
                Back To billing Info
            </button>

            <Link to='/checkout/success'>
                <button>Confirm checkout</button>
            </Link>

        </div>
    )
}
