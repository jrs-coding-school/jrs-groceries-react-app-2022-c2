import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'


export default function Footer() {
    return (
        <div className='footer-root'>

            <div>
                <p>Contact Us</p>
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
            </div>
            <br />
            <div className='flex-container'>
                <div>Privacy Policy</div>
                <div>© 2022 FWD </div>
                <div>Terms of Service</div>
            </div>
        </div>
    )
}
