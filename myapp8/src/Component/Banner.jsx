import React from 'react'
import { NavLink } from "react-router-dom";
import icon10 from '../images/icons/icon-10.png'
import icon11 from '../images/icons/icon-11.png'
import icon9 from '../images/icons/icon-9.png'
import banner13 from '../images/icons/banner-bg-13.png' 
import illustration33 from '../images/resource/illustration-33.png'
    

const Header = () => {
    return (
        <>
    <section className="banner-style-16 ">
        <div className="anim-icons">
            <div className="icon icon-1 rotate-me"><img src={icon10} alt="" /></div>
            <div className="icon icon-2 rotate-me"><img src={icon11} alt=""/></div>
            <div className="icon icon-3 rotate-me"><img src={icon9} alt=""/></div>
        </div>
        <div className="image-layer wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms" style={{backgroundImage: `url(${banner13})`}}></div>
        <div className="container  ">
            <div className="upper-box  ">
                <div className="row align-items-center  ">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box ">
                            <h1>Accounts Payable Automation 80% Faster Bill Pay & AP</h1>
                            <div className="text">Agencies around the world are moving to the digital agencies. So, It is high time to introduce your agency digitaly.</div>
                            <div className="btn-box"><NavLink to="#">Get Start<i className="fas fa-angle-right"></i></NavLink></div>
                            <div className="share-box">
                                <NavLink to="#"><i className="fab fa-twitter-square"></i>Share On Twitter</NavLink>
                                <NavLink to="#"><i className="fab fa-facebook-square"></i>Share On Facebook</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image-box js-tilt">
                            <figure className="image wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms"><img src={illustration33} alt=""/></figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-box">
                <div className="timer">
                    <div className="cs-countdown" data-countdown="12/24/2019 05:06:59"></div>            
                </div>
                <div className="btn-box">
                    <NavLink to="#" className="btn-one">White Paper</NavLink>
                    <NavLink to="#" className="btn-two">Buy Token</NavLink>
                </div>
            </div>
        </div>
    </section>

    </ >
    );
}

export default Header
