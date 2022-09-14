import React, { useEffect, useRef } from 'react'
import PhoneInput from '../PhoneInput/PhoneInput';
import './ContactInfoForm.css'

export default function ContactInfoForm({ formData, setFormData, onSubmit }) {

    let nameInputRef = useRef()

    useEffect(() => {
        nameInputRef.current.focus()
    }, []);

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
            <h2>Contact Info</h2>
            <div className='name'>
                <label htmlFor='name'>Name:</label>
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder='John Smith'
                    id='name'
                    ref={nameInputRef}
                />
            </div>
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
                />
            </div>
            <PhoneInput setPhoneNumber={(newNumber) => {
                setFormData({
                    ...formData,
                    phoneNumber: newNumber
                })
            }}
                phoneNumber={formData.phoneNumber} />
            <hr />
            <div className='btn-container'>
                <button type='submit'
                    className='right-btn'>
                    Go To Shipping Info &#8594;
                </button>
            </div>
        </form >
    )
}
