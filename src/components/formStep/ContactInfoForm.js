import React, { useEffect, useRef, useState } from 'react'
import PhoneInput from '../PhoneInput/PhoneInput';

export default function ContactInfoForm({ formData, setFormData, onSubmit }) {

    let emailInputRef = useRef()

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
            <PhoneInput
                setPhoneNumber={(newNumber) => {
                    setFormData({
                        ...formData,
                        phoneNumber: newNumber
                    })
                }}
                phoneNumber={formData.phoneNumber} />

            <button type='submit'>
                Shipping Info
            </button>
        </form >
    )
}
