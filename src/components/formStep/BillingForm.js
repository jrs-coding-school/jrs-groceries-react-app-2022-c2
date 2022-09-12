import React, { useEffect, useRef } from 'react'
import './BillingForm.css'

export default function BillingForm({ formData, setFormData, onSubmit, onBackClicked }) {

    let addressRef = useRef();
    let cardNumberRef2 = useRef();
    let cardNumberRef3 = useRef();
    let cardNumberRef4 = useRef();
    let expirationMonthRef = useRef();
    let expirationYearRef = useRef();
    let cvvRef = useRef();

    useEffect(() => {
        addressRef.current.focus()
    }, [])

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

    function handleCardInfoInputChange(e) {
        // if number is now 3 digits long, focus next input
        focusNextCardInfoInput(e)
    }

    function focusNextCardInfoInput(e) {
        e.target.value += ""; // string type cast
        // check if input is 3 digits now
        if (e.target.name == 'cardNumber1') {
            limitInputLength(e, 4)
            if (e.target.value.length >= 4) {
                cardNumberRef2.current.focus();
            }
        } else if (e.target.name == 'cardNumber2') {
            limitInputLength(e, 4)
            if (e.target.value.length >= 4) {
                cardNumberRef3.current.focus();
            }
        } else if (e.target.name == 'cardNumber3') {
            limitInputLength(e, 4)
            if (e.target.value.length >= 4) {
                cardNumberRef4.current.focus();
            }
        } else if (e.target.name == 'cardNumber4') {
            limitInputLength(e, 4)
            if (e.target.value.length >= 4) {
                expirationMonthRef.current.focus();
            }
        } else if (e.target.name == 'expirationMonth') {
            limitInputLength(e, 2)
            if (e.target.value.length >= 2) {
                expirationYearRef.current.focus();
            }
        } else {
            limitInputLength(e, 2)
            if (e.target.value.length >= 2) {
                cvvRef.current.focus();
            }
        }
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit && onSubmit()
            }}
            className='billing-root'>

            <h2>Billing Address</h2>
            <div className='billing-address'>
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
            </div>
            <br />
            <h2>Card Info</h2>
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
            <p>Card Number:</p>
            <div className='card-number'>
                <input
                    type='number'
                    name='cardNumber1'
                    value={formData.cardNumber1}
                    onChange={handleCardInfoInputChange}
                    required
                    placeholder='0000'
                    id='cardNumber1'
                />-
                <input
                    type='number'
                    name='cardNumber2'
                    value={formData.cardNumber2}
                    onChange={handleCardInfoInputChange}
                    required
                    placeholder='0000'
                    id='cardNumber2'
                    ref={cardNumberRef2}
                />-
                <input
                    type='number'
                    name='cardNumber3'
                    value={formData.cardNumber3}
                    onChange={handleCardInfoInputChange}
                    required
                    placeholder='0000'
                    id='cardNumber3'
                    ref={cardNumberRef3}
                />-
                <input
                    type='number'
                    name='cardNumber4'
                    value={formData.cardNumber4}
                    onChange={handleCardInfoInputChange}
                    required
                    placeholder='0000'
                    id='cardNumber4'
                    ref={cardNumberRef4}
                />
            </div>
            <div className='expiration-date'>
                <input
                    type='number'
                    name='expirationMonth'
                    value={formData.expirationMonth}
                    onChange={handleCardInfoInputChange}
                    required
                    placeholder='MM'
                    id='expirationMonth'
                    ref={expirationMonthRef}
                />/
                <input
                    type='number'
                    name='expirationYear'
                    value={formData.expirationYear}
                    onChange={handleCardInfoInputChange}
                    required
                    placeholder='YY'
                    id='expirationYear'
                    ref={expirationYearRef}
                />
                <input
                    className='cvv'
                    type='number'
                    name='cvv'
                    value={formData.cvv}
                    onChange={(e) => {
                        limitInputLength(e, 3)
                    }}
                    required
                    placeholder='CVV'
                    id='cvv'
                    ref={cvvRef}
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