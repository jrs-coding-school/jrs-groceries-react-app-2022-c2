import React, { useEffect, useRef } from 'react'
import { useBoolean } from '../../hooks/UseBoolean';
import './ShippingForm.css'


export default function ShippingForm({ formData, setFormData, onSubmit, onBackClicked }) {

    const [skipBilling, toggleSkipBilling] = useBoolean(false);

    let nameRef = useRef()

    function handleInputChange(e) {
        let name = e.target.name;
        let value = e.target.value;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    useEffect(() => {
        nameRef.current.focus()
    }, [])


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

    return (
        <form className='address-root'
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit && onSubmit(skipBilling)
            }}>
            <h2>Shipping Address</h2>
            <div className='name'>
                <label htmlFor='name'>Name:</label>
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder='John Smith'
                    ref={nameRef}
                    id='name'
                />
            </div>
            <div className='address'>
                <label htmlFor='address'>Address:</label>
                <input
                    type='text'
                    name='address1'
                    value={formData.address1}
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

            <div className='checkbox'>
                <label>Use same shipping info for billing </label>
                <input
                    type='checkbox'
                    checked={skipBilling}
                    onChange={toggleSkipBilling}
                />
            </div>

            <button type='button'
                onClick={() => {
                    onBackClicked && onBackClicked();
                }}>
                Back To Shipping Info
            </button>

            <button type='submit'>
                Go To Billing Info
            </button>
        </form>
    )
}
