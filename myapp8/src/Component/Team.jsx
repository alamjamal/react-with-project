import React from 'react'
import { NavLink } from 'react-router-dom'

const Team = () => {
    return (
        <>
            <section className="team-section">
        <div className="container">
            <div className="sec-title center"><h2>We Do the With Work on<br />Our Timeline</h2></div>
            <div className="three-column-carousel owl-carousel owl-theme">
               
                <div className="team-block-one">
                    <div className="inner-box">
                        <figure className="image-box"><NavLink to="#"><img src="images/resource/team-1.png" alt=""/></NavLink></figure>
                        <div className="lower-content">
                            <div className="icon-box">
                                <div className="icon icon-1"></div>
                                <div className="icon icon-2"></div>
                            </div>
                            <h2><NavLink to="#">Jay Hunt</NavLink></h2>
                            <span className="designation">CEO ENGINEER</span>
                        </div>
                    </div>
                </div>
                <div className="team-block-one">
                    <div className="inner-box">
                        <figure className="image-box"><NavLink to="#"><img src="images/resource/team-2.png" alt=""/></NavLink></figure>
                        <div className="lower-content">
                            <div className="icon-box">
                                <div className="icon icon-1"></div>
                                <div className="icon icon-2"></div>
                            </div>
                            <h2><NavLink to="#">Iris Fox</NavLink></h2>
                            <span className="designation">DEVELOPER</span>
                        </div>
                    </div>
                </div>
                <div className="team-block-one">
                    <div className="inner-box">
                        <figure className="image-box"><NavLink to="#"><img src="images/resource/team-2.png" alt=""/></NavLink></figure>
                        <div className="lower-content">
                            <div className="icon-box">
                                <div className="icon icon-1"></div>
                                <div className="icon icon-2"></div>
                            </div>
                            <h2><NavLink to="#">Iris Fox</NavLink></h2>
                            <span className="designation">DEVELOPER</span>
                        </div>
                    </div>
                </div>
                <div className="team-block-one">
                    <div className="inner-box">
                        <figure className="image-box"><NavLink to="#"><img src="images/resource/team-2.png" alt=""/></NavLink></figure>
                        <div className="lower-content">
                            <div className="icon-box">
                                <div className="icon icon-1"></div>
                                <div className="icon icon-2"></div>
                            </div>
                            <h2><NavLink to="#">Iris Fox</NavLink></h2>
                            <span className="designation">DEVELOPER</span>
                        </div>
                    </div>
                </div>
                <div className="team-block-one">
                    <div className="inner-box">
                        <figure className="image-box"><NavLink to="#"><img src="images/resource/team-2.png" alt=""/></NavLink></figure>
                        <div className="lower-content">
                            <div className="icon-box">
                                <div className="icon icon-1"></div>
                                <div className="icon icon-2"></div>
                            </div>
                            <h2><NavLink to="#">Iris Fox</NavLink></h2>
                            <span className="designation">DEVELOPER</span>
                        </div>
                    </div>
                </div>
                
                <div className="team-block-one">
                    <div className="inner-box">
                        <figure className="image-box"><NavLink to="#"><img src="images/resource/team-3.png" alt=""/></NavLink></figure>
                        <div className="lower-content">
                            <div className="icon-box">
                                <div className="icon icon-1"></div>
                                <div className="icon icon-2"></div>
                            </div>
                            <h2><NavLink to="#">Kate Carter</NavLink></h2>
                            <span className="designation">WEB DESIGNER</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Team
