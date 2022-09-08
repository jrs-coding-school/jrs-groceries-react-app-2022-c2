import React from "react";

export default function CardNumberInput({ cardNumber, setCardNumber }) {

    let displayCardNumber = ''
        + (cardNumber?.length > 4 ? '-' : '')
        + (cardNumber.slice(4, 5))
        + (cardNumber?.length > 8 ? '-' : '')
        + (cardNumber.slice(5, 9))
        + (cardNumber?.length > 12 ? '-' : '')
        + (cardNumber.slice(9, 13));

    return (
        <div className='card-number'>
            <label htmlFor='card-number'>Card Number:</label>
            <input
                type='text'
                value={displayCardNumber}
                onChange={(e) => {
                    let value = e.target.value.replace(/[^0123456789]/g, '').slice(0, 17);
                    setCardNumber && setCardNumber(value)
                }}
                required
                className='card'
                placeholder='0000-0000-0000-0000'
                id='card-number-input'
            />
        </div>
    )
}