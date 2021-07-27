import React from 'react'

const Subscription = () => {
    return (
        <>
        <section className="subscribe-style-five">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                    <div id="image_block_38">
                        <div className="image-box">
                            <div className="bg-layer" style={{backgroundImage: "url(images/icons/user-icon.png)"}}></div>
                            <figure className="image float-bob-y clearfix"><img src="images/resource/user-16.png" alt=""/></figure>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div id="content_block_41">
                        <div className="content-box">
                            <div className="sec-title"><h2>Subscribe our Newsletter</h2></div>
                            <div className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit donec tempus pellentesque dui vel tristique purus justo</div>
                            <form action="#" method="post" className="subscribe-form">
                                <div className="form-group">
                                    <input type="email" name="email" placeholder="Enter Your Email" required=""/>
                                    <button type="submit" className="theme-btn-two">Subscribe Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
        </>
    )
}

export default Subscription
