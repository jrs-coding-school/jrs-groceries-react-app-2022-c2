import React, { useEffect, useRef, useState } from 'react'

export default function ContactInfoForm({ formData, setFormData, onSubmit }) {

    const [phone, setPhone] = useState({
        phoneNumber1: '',
        phoneNumber2: '',
        phoneNumber3: '',
    })

    let emailInputRef = useRef()
    let phoneRef2 = useRef()
    let phoneRef3 = useRef()

    useEffect(() => {
        emailInputRef.current?.focus();
    }, []);

    useEffect(() => {
        setFormData({
            ...formData,
            phoneNumber: '' + phone.phoneNumber1 + phone.phoneNumber2 + phone.phoneNumber3
        })
    }, [phone]);

    useEffect(() => {
        console.log(formData)
    }, [formData]);

    function handleFormSubmit(e) {
        e.preventDefault();
        console.log("submitting contact info")
        onSubmit && onSubmit(formData);
    }

    function handleInputChange(e) {
        let name = e.target.name;
        let value = e.target.value;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handlePhoneInputChange(e) {
        // if number is now 3 digits long, focus next input
        focusNextPhoneInput(e)
    }

    function focusNextPhoneInput(e) {
        e.target.value += ""; // string type cast
        // check if input is 3 digits now
        if (e.target.name == 'phoneNumber1') {
            limitInputLength(e, 3)
            if (e.target.value.length >= 3) {
                phoneRef2.current.focus();
            }
        } else if (e.target.name == 'phoneNumber2') {
            limitInputLength(e, 3)
            if (e.target.value.length >= 3) {
                phoneRef3.current.focus();
            }
        } else {
            // on number 3
            limitInputLength(e, 4)
        }
    }

    function limitInputLength(e, maxLength) {
        let name = e.target.name;
        let value = e.target.value;

        if (value !== '') {
            value = String(value); // string type cast
            value = value.slice(0, maxLength); // slice string
            value = Number(value); // number type cast
        }

        setPhone({
            ...phone,
            [name]: value
        });
    }

    return (
        <form
            onSubmit={handleFormSubmit}
            className='contact-info-root' >
            <div className='email'>
                <label htmlFor='email'>E-mail:</label>
                <input
                    type='text'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder='name@email.com'
                    id='email'
                    ref={emailInputRef}
                />
            </div>
            <div className='first-name'>
                <label htmlFor='first-name'>First Name:</label>
                <input
                    type='text'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder='John'
                    id='first-name'
                />
            </div>
            <div className='last-name'>
                <label htmlFor='last-name'>Last Name:</label>
                <input
                    type='text'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder='Smith'
                    id='last-name'
                />
            </div>
            <div className='phone-number'>
                <label htmlFor='phone-number-1'>Phone Number:</label>
                (
                <input
                    type='number'
                    name='phoneNumber1'
                    value={phone.phoneNumber1}
                    onChange={handlePhoneInputChange}
                    required
                    className='phone'
                    placeholder='555'
                    id='phone-number-1'
                />
                )
                <input
                    type='number'
                    name='phoneNumber2'
                    value={phone.phoneNumber2}
                    onChange={handlePhoneInputChange}
                    required
                    className='phone'
                    placeholder='555'
                    ref={phoneRef2}
                    id='phone-number-2'
                />

                <input
                    type='number'
                    name='phoneNumber3'
                    value={phone.phoneNumber3}
                    onChange={handlePhoneInputChange}
                    required
                    className='phone'
                    placeholder='5555'
                    ref={phoneRef3}
                    id='phone-number-3'
                />
            </div>

            <button type='submit'>
                Shipping Info
            </button>
        </form >
    )
}
