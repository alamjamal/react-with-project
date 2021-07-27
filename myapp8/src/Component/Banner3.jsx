import React from 'react'
import { NavLink } from 'react-router-dom'
import layer3 from '../images/icons/layer-image-3.png'
const Banner3 = () => {
    return (
        <>
            <section className="crypto-service">
        <div className="image-layer" style={{backgroundImage:`url(${layer3})`}}></div>
        <div className="container">
            <div className="sec-title center"><h2>Crypto is the crowdsale service!<br />What We Offer</h2></div>
            <div className="inner-content">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                        <div className="single-item wow flipInY" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div  className="inner-box">
                                <figure className="icon-box"><img src="images/icons/icon-12.png" alt="" /></figure>
                                <h3><NavLink to="#">Encryption</NavLink></h3>
                                <div className="text">Provide your payout wallet address and callback URL to PayBear API. eiusmod tempor incididunt</div>
                                <div className="btn-box"><NavLink to="#" className="theme-btn-two">Read More</NavLink></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                        <div className="single-item wow flipInY" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div  className="inner-box">
                                <figure className="icon-box"><img src="images/icons/icon-13.png" alt="" /></figure>
                                <h3><NavLink to="#">Framework</NavLink></h3>
                                <div className="text">Provide your payout wallet address and callback URL to PayBear API. eiusmod tempor incididunt</div>
                                <div className="btn-box"><NavLink to="#" className="theme-btn-two">Read More</NavLink></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                        <div className="single-item wow flipInY" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div  className="inner-box">
                                <figure className="icon-box"><img src="images/icons/icon-14.png" alt="" /></figure>
                                <h3><NavLink to="#">Transactions</NavLink></h3>
                                <div className="text">Provide your payout wallet address and callback URL to PayBear API. eiusmod tempor incididunt</div>
                                <div className="btn-box"><NavLink to="#" className="theme-btn-two">Read More</NavLink></div>
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

export default Banner3
