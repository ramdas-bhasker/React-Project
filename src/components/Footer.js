import React from 'react';
import {NavLink} from 'react-router-dom';
import FooterLogo from '../images/footer-logo.png'
const Footer = () =>{
    return(
        <>
            <footer className="footer-area">
        <div className="container">
            <div className="footer-contact">
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <div className="footer-card">
                            <i className='bx bx-time'></i>
                            <h3>Sun - Thu : 10:00 AM - 10:00 PM</h3>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <div className="footer-card">
                            <i className='bx bxs-map'></i>
                            <h3>Nampally Station Rd, Old Kattal Mandi, Abids, Hyderabad,</h3>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <div className="footer-card">
                            <i className='bx bxs-phone-call'></i>
                            <h3 className="media-tel">
                                <NavLink to="tel:+19876543210">+040 6646 5325</NavLink>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-top-list pb-70">
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <div className="footer-list">
                            <h3>Services</h3>
                            <ul>
                                <li>
                                    <i className='bx bxs-chevron-right'></i>
                                    <NavLink to="/">Color Xerox</NavLink>
                                </li>
                                <li>
                                    <i className='bx bxs-chevron-right'></i>
                                    <NavLink to="/">Offset Printing</NavLink>
                                </li>
                                <li>
                                    <i className='bx bxs-chevron-right'></i>
                                    <NavLink to="/">AutoCad Printing</NavLink>
                                </li>
                                <li>
                                    <i className='bx bxs-chevron-right'></i>
                                    <NavLink to="/">Ammonia Prints</NavLink>
                                </li>
                                <li>
                                    <i className='bx bxs-chevron-right'></i>
                                    <NavLink to="/">Spiral Binding</NavLink>
                                </li>
                                <li>
                                    <i className='bx bxs-chevron-right'></i>
                                    <NavLink to="/">Lamination</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <div className="footer-list">
                            <h3>Quick Links</h3>
                            <ul>
                                <li>
                                    <i className='bx bxs-chevron-right'></i>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <i className='bx bxs-chevron-right'></i>
                                    <NavLink to="/">About Us</NavLink>
                                </li>
                                <li>
                                    <i className='bx bxs-chevron-right'></i>
                                    <NavLink to="/">Service</NavLink>
                                </li>
                                <li>
                                    <i className='bx bxs-chevron-right'></i>
                                    <NavLink to="/">Infrastructure</NavLink>
                                </li>
                                <li>
                                    <i className='bx bxs-chevron-right'></i>
                                    <NavLink to="/">Achievements</NavLink>
                                </li>
                                <li>
                                    <i className='bx bxs-chevron-right'></i>
                                    <NavLink to="/">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-5">
                        <div className="footer-side-list">
                            <h3>Contact Us</h3>
                            <ul>
                                <li>
                                    <i className='bx bxs-phone'></i>
                                    <NavLink to="tel:+11234567891">6668 0683</NavLink>
                                </li>
                                <li>
                                    <i className='bx bxs-phone'></i>
                                    <NavLink to="tel:+19876543210">6646 5325</NavLink>
                                </li>
                                <li>
                                    <i className='bx bxl-telegram'></i>
                                    <NavLink to="mailto:info@veterantranslation.com">info@veterantranslation.com</NavLink>
                                </li>
                                <li>
                                    <i className='bx bxs-map'></i> Nampally Station Rd, Old Kattal Mandi, Abids, Hyderabad,
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-3">
                        <div className="footer-logo">
                            <img src={FooterLogo} alt="Footer Logo" />
                        </div>
                    </div>

                    <div className="col-lg-10 col-md-9">
                        <div className="bottom-text">
                            <p>
                                2020 © All Rights Reserved Veteran Translation
                            </p>

                            <ul className="social-bottom">
                                <li>
                                    <NavLink to="/"><i className='bx bxl-facebook'></i></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/"><i className='bx bxl-twitter'></i></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/"><i className='bx bxl-instagram'></i></NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </>
    );
};
export default Footer;