import React, { useEffect, useRef, useState } from 'react'
import './InfoForm.css'

export default function InfoForm({ onSubmit, onCancel, submitText }) {

    let initialState = {
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: '',
        apartmentNumber: '',
        city: '',
        state: '',
        zipCode: '',
    }

    let phoneRef1 = useRef()
    let phoneRef2 = useRef()
    let phoneRef3 = useRef()

    const [formData, setFormData] = useState(initialState)
    const descriptionInputRef = useRef()


    useEffect(() => {
        descriptionInputRef.current.focus();
    }, [])

    function handleInputChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name, value)
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault()
        console.log(formData)
        if (onSubmit) {
            onSubmit(formData)
        }
    }

    return (
        <form onSubmit={handleFormSubmit} className='item-form-root'>

            <div className='contact-root'>
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
                        ref={descriptionInputRef}
                    />
                </div>
                <div className='first-name'>
                    <label htmlFor='first-name'>First Name:</label>
                    <input
                        type='text'
                        name='first-name'
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
                        name='last-name'
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        placeholder='Smith'
                        id='last-name'
                    />
                </div>
                <div className='phone-number'>
                    <label htmlFor='phone-number'>Phone Number:</label>
                    <input
                        type='number'
                        name='phoneNumber1'
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                        placeholder='555'
                        ref={phoneRef1}
                        id='phone-number'
                    />
                    <input
                        type='number'
                        name='phoneNumber2'
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                        placeholder='555'
                        ref={phoneRef2}
                        id='phone-number'
                    />
                    <input
                        type='number'
                        name='phoneNumber3'
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                        placeholder='555'
                        ref={phoneRef3}
                        id='phone-number'
                    />
                </div>
            </div>
            <div className='address-root'>
                <div className='address'>
                    <label htmlFor='address'>Address:</label>
                    <input
                        type='text'
                        name='address'
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        placeholder='123 Broad St.'
                        id='address'
                    />
                </div>
                <div className='apartmentNumber'>
                    <label htmlFor='apartmentNumber'>Apt/Suite:</label>
                    <input
                        type='text'
                        name='apartmentNumber'
                        value={formData.apartmentNumber}
                        onChange={handleInputChange}
                        required
                        placeholder='ex. 13A, 1109, B'
                        id='email'
                    />
                </div>
                <div className='city'>
                    <label htmlFor='city'>City:</label>
                    <input
                        type='text'
                        name='city'
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        placeholder='Mt. Pleasant'
                        id='city'
                    />
                </div>
                <div className='state'>
                    <label htmlFor='state'>State:</label>
                    <input
                        type='text'
                        name='state'
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        placeholder='SC'
                        id='state'
                        maxLength='2'
                    />
                </div>
                <div className='zipCode'>
                    <label htmlFor='zipCode'>Zip Code:</label>
                    <input
                        type='number'
                        name='zipCode'
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        placeholder='29464'
                        id='zipCode'
                        maxLength='5'
                    />
                </div>
            </div>



            <div className='buttons'>
                <button
                    onClick={() => {
                        if (onCancel) {
                            onCancel()
                        }
                    }}
                    type='button'>Cancel</button>
                <button type='submit' className='primary'>{submitText}</button>
            </div>

        </form>
    )
}
