import React, { useEffect, useRef, useState } from 'react'
import './InfoForm.css'

export default function InfoForm({ onSubmit }) {

    let initialState = {
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber1: '',
        phoneNumber2: '',
        phoneNumber3: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipCode: '',
        deliveryInstructions: ''
    }

    let phoneRef2 = useRef()
    let phoneRef3 = useRef()
    let addressRef = useRef()

    const [formData, setFormData] = useState(initialState)
    const emailInputRef = useRef()


    useEffect(() => {
        emailInputRef.current.focus();
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
            if (e.target.value.length >= 4) {
                addressRef.current.focus();
            }
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

        console.log(value)
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault()
        let formatedData = {
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
            phoneNumber: "" + formData.phoneNumber1 + formData.phoneNumber2 + formData.phoneNumber3,
            address: formData.address1,
            apartmentNumber: formData.address2,
            city: formData.city,
            state: formData.state,
            zipCode: formData.zipCode,
            deliveryInstructions: formData.deliveryInstructions
        }
        console.log(formatedData)
        if (onSubmit) {
            onSubmit(formatedData)
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
                        value={formData.phoneNumber1}
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
                        value={formData.phoneNumber2}
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
                        value={formData.phoneNumber3}
                        onChange={handlePhoneInputChange}
                        required
                        className='phone'
                        placeholder='5555'
                        ref={phoneRef3}
                        id='phone-number-3'
                    />
                </div>
            </div>
            <div className='address-root'>
                <div className='address'>
                    <label htmlFor='address'>Address:</label>
                    <input
                        type='text'
                        name='address1'
                        value={formData.address1}
                        onChange={handleInputChange}
                        required
                        placeholder='123 Broad St.'
                        ref={addressRef}
                        id='address'
                    />
                </div>
                <div className='apartmentNumber'>
                    <label htmlFor='apartmentNumber'>Apt/Suite:</label>
                    <input
                        type='text'
                        name='address2'
                        value={formData.address2}
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
                    <select
                        name='state'
                        value={formData.state}
                        onChange={handleInputChange}
                    >
                        <option value='' disabled>--select a state--</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>

                    </select>
                </div>

                <div className='zip-code'>
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
            <div className='delivery-instructions'>
                <label htmlFor='deliveryInstructions'> Delivery Instructions:</label>
                <textarea
                    type='text'
                    name='deliveryInstructions'
                    value={formData.deliveryInstructions}
                    onChange={handleInputChange}
                    placeholder='Instructions for delivery (optional)'
                    id='deliveryInstructions'
                />
            </div>

            <div className='buttons'>

                <button
                    type='submit'
                >Submit</button>
            </div>
        </form>
    )
}
