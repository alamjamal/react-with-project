import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar2 = () => {
    return (
        <>
    <header className="main-header home-16">
        <div className="outer-container">
            <div className="container">
                <div className="main-box clearfix">
                    <div className="logo-box pull-left">
                        <figure className="logo"><NavLink to="/"><img src="images/logo-4.png" alt="" /></NavLink></figure>
                    </div>
                    <div className="menu-area pull-right clearfix">
                        
                        <div className="mobile-nav-toggler">
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                        </div>
                        <nav className="main-menu navbar-expand-md navbar-light">
                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <ul className="navigation clearfix">
                                                                  
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/about">About</NavLink></li>
                                    <li><NavLink to="/services"  >Services</NavLink></li>
                                    
                                    
                                </ul>
                            </div>
                        </nav>
                        <div className="btn-box"><NavLink to="contact">Started Now</NavLink></div>
                    </div>
                </div>
            </div>
        </div>

     
        <div className="sticky-header">
            <div className="container clearfix">
                <figure className="logo-box"><NavLink to="/"><img src="images/small-logo.png" alt="" /></NavLink></figure>
                <div className="menu-area">
                    <nav className="main-menu clearfix">
                       
                    </nav>
                </div>
            </div>
        </div>
    </header>
   
    <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn"><i className="fas fa-times"></i></div>
        
        <nav className="menu-box">
            <div className="nav-logo"><NavLink to="/"><img src="images/logo.png" alt="" title="" /></NavLink></div>
            <div className="menu-outer"></div>
            <div className="contact-info">
                <h4>Contact Info</h4>
                <ul>
                    <li>Chicago 12, Melborne City, USA</li>
                    <li><NavLink to="tel:+8801682648101">+88 01682648101</NavLink></li>
                    <li><NavLink to="mailto:info@example.com">info@example.com</NavLink></li>
                </ul>
            </div>
            <div className="social-links">
                <ul className="clearfix">
                    <li><NavLink to="#"><span className="fab fa-twitter"></span></NavLink></li>
                    <li><NavLink to="#"><span className="fab fa-facebook-square"></span></NavLink></li>
                    <li><NavLink to="#"><span className="fab fa-pinterest-p"></span></NavLink></li>
                    <li><NavLink to="#"><span className="fab fa-instagram"></span></NavLink></li>
                    <li><NavLink to="#"><span className="fab fa-youtube"></span></NavLink></li>
                </ul>
            </div>
        </nav>
    </div>
        </>
    )
}

export default NavBar2
