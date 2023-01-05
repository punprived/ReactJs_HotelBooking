import React from 'react'

const Service = () => {
  return (    
    <>
<div className="spacer services wowload fadeInUp">
<div className="container">
    <div className="row">
        <div className="col-sm-4">            
            <div id="RoomCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                <div className="item active"><img src="images/photos/8.jpg" className="img-responsive" alt="slide" /></div>                
                <div className="item  height-full"><img src="images/photos/9.jpg"  className="img-responsive" alt="slide" /></div>
                <div className="item  height-full"><img src="images/photos/10.jpg"  className="img-responsive" alt="slide" /></div>
                </div>
                
                <a className="left carousel-control" href="#RoomCarousel" role="button" data-slide="prev"><i className="fa fa-angle-left"></i></a>
                <a className="right carousel-control" href="#RoomCarousel" role="button" data-slide="next"><i className="fa fa-angle-right"></i></a>
            </div>            
            <div className="caption">Rooms<a href="rooms-tariff.php" className="pull-right"><i className="fa fa-edit"></i></a></div>
        </div>


        <div className="col-sm-4">            
            <div id="TourCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                <div className="item active"><img src="images/photos/6.jpg" className="img-responsive" alt="slide" /></div>
                <div className="item  height-full"><img src="images/photos/3.jpg"  className="img-responsive" alt="slide" /></div>
                <div className="item  height-full"><img src="images/photos/4.jpg"  className="img-responsive" alt="slide" /></div>
                </div>
                
                <a className="left carousel-control" href="#TourCarousel" role="button" data-slide="prev"><i className="fa fa-angle-left"></i></a>
                <a className="right carousel-control" href="#TourCarousel" role="button" data-slide="next"><i className="fa fa-angle-right"></i></a>
            </div>
            
            <div className="caption">Tour Packages<a href="gallery.php" className="pull-right"><i className="fa fa-edit"></i></a></div>
        </div>


        <div className="col-sm-4">            
            <div id="FoodCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                <div className="item active"><img src="images/photos/1.jpg" className="img-responsive" alt="slide" /></div>
                <div className="item  height-full"><img src="images/photos/2.jpg"  className="img-responsive" alt="slide" /></div>
                <div className="item  height-full"><img src="images/photos/5.jpg"  className="img-responsive" alt="slide" /></div>
                </div>                
                <a className="left carousel-control" href="#FoodCarousel" role="button" data-slide="prev"><i className="fa fa-angle-left"></i></a>
                <a className="right carousel-control" href="#FoodCarousel" role="button" data-slide="next"><i className="fa fa-angle-right"></i></a>
            </div>            
            <div className="caption">Food and Drinks<a href="gallery.php" className="pull-right"><i className="fa fa-edit"></i></a></div>
        </div>
    </div>
</div>
</div>
</>

  )
}

export default Service