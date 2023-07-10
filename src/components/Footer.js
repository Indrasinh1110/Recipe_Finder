import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <span className='social-logo'>
                CookAsYourWish
                <i class="fas fa-utensils"></i>
            </span>
            
            <div class='social-icons'>
                <span class='social-icon-span facebook'>
                    <i class='fab fa-facebook-f' />
                </span>
                <span class='social-icon-span instagram' >
                    <i class='fab fa-instagram' />
                </span>
                <span class='social-icon-span youtube'>
                    <i class='fab fa-youtube' />
                </span>
                <span class='social-icon-span twitter'>
                    <i class='fab fa-twitter' />
                </span>
                <span class='social-icon-span linkedin'>
                    <i class='fab fa-linkedin' />
                </span>
            </div>
            <small class='website-rights'> CookAsYourWish © 2023</small>
        </div>
    );
}

export default Footer;