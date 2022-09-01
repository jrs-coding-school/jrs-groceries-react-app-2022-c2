import React from 'react'
import './SignUpForm.css'

export default function SignUpForm() {
    return (

        <form className='login-form'>
            <div className='username'>
                <label>Username: </label>
                <input type="text" />
            </div>

            <div className='password'>
                <label>Password: </label>
                <input type="text" />
            </div>

            <button>Sign Up</button>
        </form>

    )
}
