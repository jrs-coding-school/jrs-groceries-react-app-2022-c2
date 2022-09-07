import React from "react";

export default function PhoneInput({ phoneNumber, setPhoneNumber }) {

    let displayPhoneNumber = ''
        + (phoneNumber?.length > 0 ? '(' : '')
        + (phoneNumber.slice(0, 3))
        + (phoneNumber?.length > 3 ? ')' : '')
        + (phoneNumber.slice(3, 6))
        + (phoneNumber?.length > 6 ? '-' : '')
        + (phoneNumber.slice(6, 10));

    return (
        <div className='phone-number'>
            <label htmlFor='phone-number-1'>Phone Number:</label>
            <input
                type='text'
                value={displayPhoneNumber}
                onChange={(e) => {
                    let value = e.target.value.replace(/[^0123456789]/g, '').slice(0, 10);
                    setPhoneNumber && setPhoneNumber(value)
                }}
                required
                className='phone'
                placeholder='(123)-555-1234'
                id='phone-number-input'
            />
        </div>
    )
}