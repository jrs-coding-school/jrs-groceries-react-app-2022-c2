import React, { useRef, useState } from 'react'
import { useBoolean } from '../../hooks/UseBoolean';

export default function BillingForm({ formData, setFormData, onSubmit, onBackClicked }) {

    let addressRef = useRef();

    function handleInputChange(e) {
        let name = e.target.name;
        let value = e.target.value;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    function limitInputLength(e, maxLength) {
        let name = e.target.name;
        let value = e.target.value;

        if (value !== '') {
            value = String(value); // string type cast
            value = value.slice(0, maxLength); // slice string
            value = Number(value); // number type cast
        }

        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit && onSubmit()
            }}
            className='address-root'>

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
                    onChange={(e) => {
                        limitInputLength(e, 5)
                    }}
                    required
                    placeholder='29464'
                    id='zipCode'
                    maxLength='5'
                />
            </div>
            <br />
            <div className='cardholder-name'>
                <label htmlFor='cardholder-name'>Cardholder Name:</label>
                <input
                    type='text'
                    name='cardholderName'
                    value={formData.cardholderName}
                    onChange={handleInputChange}
                    required
                    placeholder='Cardholder Name'
                    id='cardholderName'
                />
            </div>
            <div className='card-number'>
                <label htmlFor='card-number'>Card Number:</label>
                <input
                    type='number'
                    name='cardNumber'
                    value={formData.cardNumber}
                    onChange={(e) => {
                        limitInputLength(e, 16)
                    }}
                    required
                    placeholder='0000-0000-0000-0000'
                    id='cardNumber'
                    maxLength='16'
                />
            </div>
            <div className=''>
                <label htmlFor='expiration-date'>Expiration Date:</label>
                <input
                    type='number'
                    name='expirationDate'
                    value={formData.expirationDate}
                    onChange={(e) => {
                        limitInputLength(e, 4)
                    }}
                    required
                    placeholder='MM/YY'
                    id='expirationDate'
                    maxLength='4'
                />
            </div>
            <div className='cvv'>
                <label htmlFor='cvv'>CVV:</label>
                <input
                    type='number'
                    name='cvv'
                    value={formData.cvv}
                    onChange={(e) => {
                        limitInputLength(e, 3)
                    }}
                    required
                    placeholder='CVV'
                    id='cvv'
                    maxLength='3'
                />
            </div>

            <button type='button'
                onClick={() => {
                    onBackClicked && onBackClicked();
                }}>
                Back To Shipping Info
            </button>

            <button type='submit'>
                Submit
            </button>
        </form>
    )
}
