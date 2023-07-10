import React from 'react';
import './ServicesPage.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join our recipe app community and savor a world of culinary delights. Subscribe now!                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
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
            </section>
        </div>
    );
}

export default Footer;