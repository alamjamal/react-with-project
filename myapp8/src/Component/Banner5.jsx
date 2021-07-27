import React from 'react'
import { NavLink } from 'react-router-dom'
import cbg from '../images/background/control-bg.png'



const Banner5 = (props) => {
    return (
        <>
            <section className="take-control" style={{ backgroundImage: `url(${cbg})` }}>
                <div className="container">
                    <div className="sec-title center"><h2>Take control of your<br />credit & identity</h2></div>
                    <div className="row">

                        <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                            <div className="single-item">
                                <div className="inner-box">
                                    <figure className="image-box wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms"><img src={props.img1} alt="" /></figure>
                                    <h3><NavLink to="#">{props.head1}</NavLink></h3>
                                    <div className="text">{props.text1}</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                            <div className="single-item">
                                <div className="inner-box">
                                    <figure className="image-box wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms"><img src={props.img2} alt="" /></figure>
                                    <h3><NavLink to="#">{props.head2}</NavLink></h3>
                                    <div className="text">{props.text2}</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                            <div className="single-item">
                                <div className="inner-box">
                                    <figure className="image-box wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms"><img src={props.img3} alt="" /></figure>
                                    <h3><NavLink to="#">{props.head3}</NavLink></h3>
                                    <div className="text">{props.text3}</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                            <div className="single-item">
                                <div className="inner-box">
                                    <figure className="image-box wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms"><img src={props.img4} alt="" /></figure>
                                    <h3><NavLink to="#">{props.head4}</NavLink></h3>
                                    <div className="text">{props.text4}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner5
