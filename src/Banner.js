import React from 'react'

const Banner = () => {
  return (
    <>
    <div className="banner">    	   
    <img src="images/photos/banner.jpg"  className="img-responsive" alt="slide" />
    <div className="welcome-message">
        <div className="wrap-info">
            <div className="information">
                <h1  className="animated fadeInDown">Best hotel in Dubai</h1>
                <p className="animated fadeInUp">Most luxurious hotel of asia with the royal treatments and excellent customer service.</p>                
            </div>
            <a href="#information" className="arrow-nav scroll wowload fadeInDownBig"><i className="fa fa-angle-down"></i></a>
        </div>
    </div>
</div>
</>
  )
}

export default Banner