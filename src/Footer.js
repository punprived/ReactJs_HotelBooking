import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="spacer">
        <div className="container">
            <div className="row">
                <div className="col-sm-5">
                    <h4>Holiday Crown</h4>
                    <p>Holiday Crown was these three and songs arose whose. Of in vicinity contempt together in possible branched. Assured company hastily looking garrets in oh. Most have love my gone to this so. Discovered interested prosperous the our affronting insipidity day. Missed lovers way one vanity wishes nay but. Use shy seemed within twenty wished old few regret passed. Absolute one hastened mrs any sensible. </p>
                </div>              
                 
                 <div className="col-sm-3">
                    <h4>Quick Links</h4>
                    <ul className="list-unstyled">
                        <li><a href="rooms-tariff.php">Rooms & Tariff</a></li>        
                        <li><a href="introduction.php">Introduction</a></li>
                        <li><a href="gallery.php">Gallery</a></li>
                        <li><a href="tour.php">Tour Packages</a></li>
                        <li><a href="contact.php">Contact</a></li>
                    </ul>
                </div>
                 <div className="col-sm-4 subscribe">
                    <h4>Subscription</h4>
                    <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter email id here" />
                    <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Get Notify</button>
                    </span>
                    </div>
                    <div className="social">
                    <a href="#"><i className="fa fa-facebook-square" data-toggle="tooltip" data-placement="top" data-original-title="facebook"></i></a>
                    <a href="#"><i className="fa fa-instagram"  data-toggle="tooltip" data-placement="top" data-original-title="instragram"></i></a>
                    <a href="#"><i className="fa fa-twitter-square" data-toggle="tooltip" data-placement="top" data-original-title="twitter"></i></a>
                    <a href="#"><i className="fa fa-pinterest-square" data-toggle="tooltip" data-placement="top" data-original-title="pinterest"></i></a>
                    <a href="#"><i className="fa fa-tumblr-square" data-toggle="tooltip" data-placement="top" data-original-title="tumblr"></i></a>
                    <a href="#"><i className="fa fa-youtube-square" data-toggle="tooltip" data-placement="top" data-original-title="youtube"></i></a>
                    </div>
                </div>
            </div>
          
        </div>
      
</footer>

<div className="text-center copyright">Powered by <a href="http://thebootstrapthemes.com">thebootstrapthemes.com</a></div>

<a href="#home" className="toTop scroll"><i className="fa fa-angle-up"></i></a>

<div id="blueimp-gallery" className="blueimp-gallery blueimp-gallery-controls">
    
    <div className="slides"></div>
    
    <h3 className="title">title</h3>
    <a className="prev">‹</a>
    <a className="next">›</a>
    <a className="close">×</a>
      
</div>














    </>
  )
}

export default Footer