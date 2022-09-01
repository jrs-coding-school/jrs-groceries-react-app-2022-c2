import React, { useState } from 'react'
import { useBoolean } from '../../hooks/UseBoolean';
import LoginForm from './loginForm/LoginForm'
import SignUpForm from './signUpForm/SignUpForm'

export default function Login() {

    const [isLoginShown, toggleIsLoginShown] = useBoolean(true);

    return (
        <div>
            {
                isLoginShown
                    ? <LoginForm />
                    : <SignUpForm />
            }

            <div>
                <p>
                    {
                        isLoginShown
                            ? 'Need to make an account?'
                            : 'Already have an account?'
                    }
                </p>

                <button onClick={() => {
                    toggleIsLoginShown();
                }}>
                    {
                        isLoginShown
                            ? 'Sign Up'
                            : 'Log In'
                    }
                </button>

            </div>


        </div>
    )
}
