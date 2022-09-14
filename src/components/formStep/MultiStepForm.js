import React, { useState } from 'react'
import BillingForm from './BillingForm'
import ConfirmCheckout from './ConfirmCheckout'
import ContactInfoForm from './ContactInfoForm'
import ShippingForm from './ShippingForm'
import './MultiStepForm.css'

export default function MultiStepForm() {

    const [contactFormData, setContactFormData] = useState({
        email: '',
        name: '',
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
        cardNumber1: '',
        cardNumber2: '',
        cardNumber3: '',
        cardNumber4: '',
        expirationMonth: '',
        expirationYear: '',
        cvv: ''
    })

    const [currentStep, setCurrentStep] = useState(0);

    function nextStep() {
        setCurrentStep(currentStep + 1);
    }

    function prevStep() {
        setCurrentStep(currentStep - 1);
    }

    const formList = [

        <ContactInfoForm formData={contactFormData}
            setFormData={setContactFormData}
            onSubmit={() => {
                console.log("contact info updated")
                nextStep();
            }} />,
        <ShippingForm formData={shippingFormData}
            setFormData={setShippingFormData}
            onBackClicked={prevStep}
            onSubmit={(skipBilling) => {
                if (skipBilling) {
                    // set billing to be the same as the shipping
                    setBillingFormData(shippingFormData);
                }
                nextStep()
            }} />,
        <BillingForm formData={billingFormData}
            setFormData={setBillingFormData}
            onBackClicked={prevStep}
            onSubmit={() => {
                nextStep()
            }} />,

        <ConfirmCheckout contactFormData={contactFormData}
            shippingFormData={shippingFormData}
            billingFormData={billingFormData}
            onBackClicked={prevStep}
            onSubmit={() => {
                nextStep()
            }} />
    ]

    return (
        <div className='item-form-root'>
            {formList[currentStep]}
        </div>
    )
}
