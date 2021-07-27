import React from 'react'
import { NavLink } from "react-router-dom";
import icon9 from '../images/icons/icon-9.png'
import icon10 from '../images/icons/icon-10.png'
import icon11 from '../images/icons/icon-11.png'

import shap19 from '../images/icons/shap-19.png'
import shap20 from '../images/icons/shap-20.png'
import shap21 from '../images/icons/shap-21.png'
import shap22 from '../images/icons/shap-22.png'
const Banner2 = () => {
    return (
        <>
            <section className="transactions-work">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div id="content_block_39">
                        <div className="content-box">
                            <div className="sec-title"><h2>How Transactions Work</h2></div>
                            <h5>Crypto is the best crowdsale service!</h5>
                            <div className="text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            </div>
                            <div className="btn-box"><NavLink to="#" className="theme-btn-two">Read More</NavLink></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
                    <div id="content_block_40">
                        <div className="inner-box">  
                            <div className="single-item wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="count-box" style={{backgroundImage: `url(${icon9})`}}>01</div>
                                <div className="box">
                                    <div className="pattern-bg">
                                        <div className="pattern-1" style={{backgroundImage: `url(${shap19})`}}></div>
                                        <div className="pattern-2" style={{backgroundImage: `url(${shap20})`}}></div>
                                    </div>
                                    <h4><NavLink to="#">Bitcoin market</NavLink></h4>
                                    <div className="text">Lorem ipsum dolor sit amet adipiscing elit donec tempus</div>
                                </div>
                            </div>
                            <div className="single-item wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="count-box" style={{backgroundImage: `url(${icon10})`}}>02</div>
                                <div className="box">
                                    <div className="pattern-bg">
                                        <div className="pattern-1" style={{backgroundImage: `url(${shap19})`}}></div>
                                        <div className="pattern-2" style={{backgroundImage: `url(${shap21})`}}></div>
                                    </div>
                                    <h4><NavLink to="#">Buy crypto</NavLink></h4>
                                    <div className="text">Lorem ipsum dolor sit amet adipiscing elit donec tempus</div>
                                </div>
                            </div>
                            <div className="single-item wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="count-box" style={{backgroundImage: `url(${icon11})`}}>03</div>
                                <div className="box">
                                    <div className="pattern-bg">
                                        <div className="pattern-1" style={{backgroundImage: `url(${shap19})`}}></div>
                                        <div className="pattern-2" style={{backgroundImage: `url(${shap22})`}}></div>
                                    </div>
                                    <h4><NavLink to="#">Earn money</NavLink></h4>
                                    <div className="text">Lorem ipsum dolor sit amet adipiscing elit donec tempus</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Banner2
