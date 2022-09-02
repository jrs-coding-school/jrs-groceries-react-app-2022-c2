import React, { useEffect, useState } from 'react'
import { useApi } from '../../../services/api.service';
import './SignUpForm.css'

export default function SignUpForm() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [isLoading, setIsLoading] = useState(false)
    const [isPasswordVisible, setisPasswordVisible] = useState(false);
    const [isEmailTaken, setIsEmailTaken] = useState(true);
    const [debounceTimer, setDebounceTimer] = useState(null);

    const api = useApi();
    const [wasSignUpFailed, setWasSignUpFailed] = useState(false);

    useEffect(() => {
        clearTimeout(debounceTimer)
        setDebounceTimer(setTimeout(() => {
            checkEmailAvailability();
        }, 400));

    }, [formData.email])

    function handleFormSubmit(e) {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setWasSignUpFailed(true);
            return;
        }
        attemptSignUp();
    };

    function handleInputChange(e) {
        let { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    function checkEmailAvailability() {
        api.getUserByEmail(formData.email)
            .then(res => {
                setIsEmailTaken(true);
            }).catch(err => {
                console.log(err, err.response)
                if (err.response.status == 404) {
                    // no user found
                    console.log("no user found")
                    setIsEmailTaken(false);
                } else if (err.response.status == 401) {
                    // user exists
                    console.log("email taken")
                    setIsEmailTaken(true);
                } else {
                    console.error(err);
                }
            })
            .finally(() => {
                console.log("checked availability for ", formData.email)
            })
    }

    function attemptSignUp() {
        api.createUser(formData)
            .then(res => {
                // do something
                console.log(res)
                const user = res.data.user;

                // navigate(`/`);
            }).catch(err => {
                console.error(err);
                setWasSignUpFailed(true);
            });
    }


    return (

        <form className='login-form'
            onSubmit={handleFormSubmit}>

            <div className='email'>
                <div>Email is {isEmailTaken && 'un'}available</div>
                <label
                    htmlFor='signUpEmailInput'>
                    Email:
                </label>

                <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}

                    className='email'
                    required
                    placeholder='email@host.com'
                    id='signUpEmailInput'
                />
            </div>

            <div>
                <label htmlFor='signUpPasswordInput'>Password: </label>
                <input
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}

                    className="password"
                    required
                    id='signUpPasswordInput'
                />
            </div>
            <div>
                <label htmlFor='signUpConfirmPasswordInput'>Confirm Password: </label>
                <input
                    type={isPasswordVisible ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}

                    className="password confirm"
                    required
                    id='signUpConfirmPasswordInput'
                />
            </div>

            <br />

            <input
                type="checkbox"
                checked={isPasswordVisible}
                onChange={(e) => {
                    setisPasswordVisible(e.target.checked);
                }}

                className="password-visible"
                id="loginPasswordVisibleInput"
            />
            <label
                className="show-password"
                htmlFor="loginPasswordVisibleInput">
                Show&nbsp;Password
            </label>

            <div className={"signup-failed " + (wasSignUpFailed && 'visible')} >
                Your passwords did not match.
            </div>

            {!isLoading
                ? (
                    <button
                        disabled={!formData.email || !formData.password}
                        type="submit"
                    >
                        Create Account
                    </button>
                )
                : <div className="loader-spin-root">
                    <div className="circle">

                    </div>
                </div>}

        </form >

    )
}
