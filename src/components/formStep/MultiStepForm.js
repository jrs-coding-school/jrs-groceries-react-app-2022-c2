import React, { useContext, useState } from 'react'
import BillingForm from './BillingForm'
import ConfirmCheckout from './ConfirmCheckout'
import ContactInfoForm from './ContactInfoForm'
import ShippingForm from './ShippingForm'
import './MultiStepForm.css'
import { CartContext, UserContext } from '../../App'
import http from '../../services/api.service'
import { useNavigate } from 'react-router-dom'

export default function MultiStepForm() {

    let { activeUser } = useContext(UserContext);
    let { cart } = useContext(CartContext);
    const navigate = useNavigate();

    const [contactFormData, setContactFormData] = useState({
        email: '',
        name: '',
        phoneNumber: '',
    })
    const [shippingFormData, setShippingFormData] = useState({
        name: '',
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

    function submitTransaction() {
        // * shipping and billing

        let total = getGrandTotalFromCart();

        http.submitTransaction(activeUser.id, cart, total)
            .then(res => {
                // clear cart
                // show confirmation page
                console.log(res.data.transactionId)
                let transactionId = res.data.transactionId;
                navigate('/checkout/success/' + transactionId)
            })
            .catch(err => {
                console.error(err)
            })
    }

    function getGrandTotalFromCart() {
        let total = 0;

        for (let item of cart) {
            total += item.total;
        }

        let taxRate = 0.07; // 7%

        return total + (total * taxRate);
    }


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
                submitTransaction();
            }} />
    ]

    return (
        <div className='item-form-root'>
            {formList[currentStep]}
        </div>
    )
}
