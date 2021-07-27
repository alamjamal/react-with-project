import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="main-footer style-five style-six">
        <div className="anim-icons">
            <div className="icon icon-1"><img src="images/icons/pattern-21.png" alt=""/></div>
        </div>
        <div className="image-layer" style={{backgroundImage: "url(images/icons/footer-bg-5.png)"}}></div>
        <div className="container">
            <div className="footer-top">
                <div className="widget-section">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div className="about-widget footer-widget">
                                <figure className="footer-logo"><NavLink to="index.html"><img src="images/footer-logo-2.png" alt=""/></NavLink></figure>
                                <div className="text">Lorem ipsum dolor sit consectetur adipisicing elit, sed do eiusmod tempor .........</div>
                                
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                            <div className="links-widget footer-widget">
                                <h4 className="widget-title">Services</h4>
                                <div className="widget-content">
                                    <ul className="list clearfix">
                                        <li><NavLink to="#">Business Dashboards</NavLink></li>
                                        <li><NavLink to="#">Sales Analytics</NavLink></li>
                                        <li><NavLink to="#">Digital Marketing</NavLink></li>
                                        <li><NavLink to="#">Financial Help</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="contact-widget footer-widget">
                                <h4 className="widget-title">Contact Us</h4>
                                <div className="widget-content">
                                    <ul className="contact-info clearfix">
                                        <li><i className="fas fa-map-marker-alt"></i> 25 Bedford St. New York City.</li>
                                        <li><i className="fas fa-phone"></i><NavLink to="tel:0665184575181">(+066) 518 - 457 - 5181</NavLink></li>
                                        <li><i className="fas fa-envelope"></i><NavLink to="mailto:info@example.com">info@example.com</NavLink></li>
                                    </ul>
                                </div>
                                <ul className="social-links clearfix">
                                    <li><NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink></li>
                                    <li><NavLink to="#"><i className="fab fa-twitter"></i></NavLink></li>
                                    <li><NavLink to="#"><i className="fab fa-skype"></i></NavLink></li>
                                    <li><NavLink to="#"><i className="fab fa-linkedin-in"></i></NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="links-widget footer-widget">
                                <h4 className="widget-title">About Company</h4>
                                <div className="widget-content">
                                    <ul className="list clearfix">
                                        <li><NavLink to="#">Appway Online</NavLink></li>
                                        <li><NavLink to="#">Our Leadership</NavLink></li>
                                        <li><NavLink to="#">Carrers</NavLink></li>
                                        <li><NavLink to="#">What We Do</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        <div className="copyright">&copy; 2020 <NavLink to="#">appway</NavLink>. All rights reserved</div>
    </footer>
        </>
    )
}

export default Footer
