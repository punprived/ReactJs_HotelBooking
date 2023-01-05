import React from 'react'
const Header = () => {
  return (
    <>
        <nav className="navbar  navbar-default" role="navigation">
        <div className="container">            
            <div className="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.php"><img src="images/logo.png"  alt="holiday crown" /></a>
            </div>
            
            <div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
            
            <ul class="nav navbar-nav">        
                <li><a href="index.php">Home </a></li>
                <li><a href="rooms-tariff.php">Rooms & Tariff</a></li>        
                <li><a href="introduction.php">Introduction</a></li>
                <li><a href="gallery.php">Gallery</a></li>
                <li><a href="contact.php">Contact</a></li>
            </ul>
            </div>
        </div>
        </nav>
    </>
  )
}

export default Header