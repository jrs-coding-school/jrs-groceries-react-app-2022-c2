import React from 'react'
import './LoginForm.css'
import { Link } from 'react-router-dom';

export default function LoginForm() {

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

            <button>Log In</button>
        </form>


    )
}
