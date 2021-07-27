import React from 'react'
import { NavLink } from 'react-router-dom'

const NewsEvent = (props) => {
    
    return (

        <>
        <section className="news-section home-16">
        <div className="pattern-bg">
            <div className="pattern-1 wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms" style={{backgroundImage: "url(images/icons/pattern-31.png)"}}></div>
            <div className="pattern-2 wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms" style={{backgroundImage: "url(images/icons/pattern-32.png)"}}></div>
        </div>
        <div className="container">
            <div className="sec-title center">
                <h2>News & Events</h2>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 news-column">
                    <div className="news-block-one wow flipInY" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><NavLink to="#"><img src="images/resource/news-4.jpg" alt=""/></NavLink></figure>
                            <div className="lower-content">
                                
                                <div className="post-date"><i className="fas fa-calendar-alt"></i>January 11, 2019</div>
                                <h3><NavLink to="#">Design your apps in your own way Business Startegies</NavLink></h3>
                                <div className="link-btn"><NavLink to="#">Read More</NavLink></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 news-column">
                    <div className="news-block-one wow flipInY" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><NavLink to="#"><img src="images/resource/news-5.jpg" alt=""/></NavLink></figure>
                            <div className="lower-content">
                                <div className="post-date"><i className="fas fa-calendar-alt"></i>January 10, 2019</div>
                                <h3><NavLink to="#">We support our user every time and upgarad our app.</NavLink></h3>
                                <div className="link-btn"><NavLink to="#">Read More</NavLink></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 news-column">
                    <div className="news-block-one wow flipInY" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><NavLink to="#"><img src="images/resource/news-6.jpg" alt=""/></NavLink></figure>
                            <div className="lower-content">
                                <div className="post-date"><i className="fas fa-calendar-alt"></i>January 09, 2019</div>
                                <h3><NavLink to="#">We developed the app for our customer to easy to use it.</NavLink></h3>
                                <div className="link-btn"><NavLink to="#">Read More</NavLink></div>
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

export default NewsEvent
