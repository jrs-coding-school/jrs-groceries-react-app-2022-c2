import React, { useState } from 'react'
import BillingForm from './BillingForm'
import ConfirmCheckout from './ConfirmCheckout'
import ContactInfoForm from './ContactInfoForm'
import ShippingForm from './ShippingForm'
import './MultiStepForm.css'

export default function MultiStepForm() {

    const [contactFormData, setContactFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
    })
    const [shippingFormData, setShippingFormData] = useState({
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipCode: '',
        deliveryInstructions: ''
    })
    const [billingFormData, setBillingFormData] = useState({
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipCode: '',
        cardholderName: '',
        cardNumber: '',
        expirationDate: '',
        cvv: ''
    })
    const [formData, setFormData] = useState()

    const [currentStep, setCurrentStep] = useState(0);

    function nextStep() {
        setCurrentStep(currentStep + 1);
    }

    const formList = [

        <ContactInfoForm formData={contactFormData}
            setFormData={setContactFormData}
            onSubmit={() => {
                // update the form data
                console.log("contact info updated")
                nextStep();
            }} />,
        <ShippingForm formData={shippingFormData}
            setFormData={setShippingFormData}
            onSubmit={(skipBilling) => {
                // update the form data
                if (skipBilling) {
                    // set billing to be the same as the shipping
                    // ideally skip straight to the confirmation page 
                    // and just display all info before they finally click 'Checkout'
                    setBillingFormData(shippingFormData);
                }
                nextStep()
            }} />,
        <BillingForm formData={billingFormData}
            setFormData={setBillingFormData}
            onSubmit={() => {
                // update the form data
                setFormData()
                // also => submit the whole form
                nextStep()
            }} />,

        <ConfirmCheckout contactFormData={contactFormData}
            shippingFormData={shippingFormData}
            billingFormData={billingFormData}
            setFormData={setFormData} />
    ]

    return (
        <div className='item-form-root'>
            {formList[currentStep]}
        </div>
    )
}
