import React from 'react'
import { NavLink } from 'react-router-dom'

const NewsEvent = (props) => {
    console.log(props);
    return (

        <>
        <div className="col-lg-4 col-md-6 col-sm-12 news-column">
                    <div className="news-block-one wow flipInY" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><NavLink to={`/blogpost/${props.id}`}><img src={`http://localhost:1337${props.pic}`} alt=""/></NavLink></figure>
                            <div className="lower-content">
                                
                                <div className="post-date"><i className="fas fa-calendar-alt"></i>{props.published_at}</div>
                                <h3><NavLink to={`/blogpost/${props.id}`}>{props.heading}</NavLink></h3>
                                <div className="link-btn"><NavLink to={`/blogpost/${props.id}`}>Read More</NavLink></div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default NewsEvent
