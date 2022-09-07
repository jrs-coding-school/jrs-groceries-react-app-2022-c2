import React from 'react'


export default function ConfirmCheckout({ contactFormData, shippingFormData, billingFormData }) {

    return (
        <div>
            <h2>Contact Info</h2>
            <ul>
                <li>
                    E-Mail: {contactFormData.email}
                </li>
                <li>
                    First Name: {contactFormData.firstName}
                </li>
                <li>
                    Last Name: {contactFormData.lastName}
                </li>
                <li>
                    Phone Number: {contactFormData.phoneNumber}
                </li>
            </ul>
            <h2>Shipping Info</h2>
            <ul>
                <li>
                    Address 1: {shippingFormData.address1}
                </li>
                <li>
                    Address 2: {shippingFormData.address2}
                </li>
                <li>
                    City: {shippingFormData.city}
                </li>
                <li>
                    State:{shippingFormData.state}
                </li>
                <li>
                    Zip Code:{shippingFormData.zipCode}
                </li>
                <li>
                    Delivery Instructions: {shippingFormData.deliveryInstructions}
                </li>
            </ul>
            <h2>Billing Info</h2>
            <ul>
                <li>
                    Address 1: {billingFormData.address1}
                </li>
                <li>
                    Address 2: {billingFormData.address2}
                </li>
                <li>
                    City: {billingFormData.city}
                </li>
                <li>
                    State: {billingFormData.state}
                </li>
                <li>
                    Zip Code: {billingFormData.zipCode}
                </li>
                <br />
                <li>
                    Cardholder Name: {billingFormData.cardholderName}
                </li>
                <li>
                    Card Number:{billingFormData.cardNumber}
                </li>
                <li>
                    Expiration Date:{billingFormData.expirationDate}
                </li>
                <li>
                    CVV: {billingFormData.cvv}
                </li>
            </ul>
            <button>Back</button>
            <button type='submit'>
                Confirm
            </button>
        </div>
    )
}
