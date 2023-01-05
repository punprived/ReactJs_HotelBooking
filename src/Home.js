import React from 'react'
import Banner from './Banner'
import Service from './Service'
const Home = () => {
  return (
    <>
        <Banner />
        <div id="information" className="spacer reserve-info">
        <div className="container">
        <div className="row">
        <div className="col-sm-7 col-md-8">
            <div className="embed-responsive embed-responsive-16by9 wowload fadeInLeft"><iframe  className="embed-responsive-item" src="//player.vimeo.com/video/55057393?title=0" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>
        </div>
        <div className="col-sm-5 col-md-4">
        <h3>Reservation</h3>
            <form role="form" classNameName="wowload fadeInRight">
                <div className="form-group">
                    <input type="text" className="form-control"  placeholder="Name" />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control"  placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="Phone" className="form-control"  placeholder="Phone" />
                </div>        
                <div className="form-group">
                    <div className="row">
                    <div className="col-xs-6">
                    <select className="form-control">
                    <option>No. of Rooms</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                    </div>        
                    <div className="col-xs-6">
                    <select className="form-control">
                    <option>No. of Adult</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                    </div></div>
                </div>
                <div className="form-group">
                    <div className="row">
                    <div className="col-xs-4">
                    <select className="form-control col-sm-2" name="expiry-month" id="expiry-month">
                        <option>Date</option>
                        <option value="01">1</option>
                        <option value="02">2</option>
                        <option value="03">Mar (03)</option>
                        <option value="04">Apr (04)</option>
                        <option value="05">May (05)</option>
                        <option value="06">June (06)</option>
                        <option value="07">July (07)</option>
                        <option value="08">Aug (08)</option>
                        <option value="09">Sep (09)</option>
                        <option value="10">Oct (10)</option>
                        <option value="11">Nov (11)</option>
                        <option value="12">Dec (12)</option>
                    </select>
                    </div>
                    <div className="col-xs-4">
                    <select className="form-control col-sm-2" name="expiry-month" id="expiry-month">
                        <option>Month</option>
                        <option value="01">Jan (01)</option>
                        <option value="02">Feb (02)</option>
                        <option value="03">Mar (03)</option>
                        <option value="04">Apr (04)</option>
                        <option value="05">May (05)</option>
                        <option value="06">June (06)</option>
                        <option value="07">July (07)</option>
                        <option value="08">Aug (08)</option>
                        <option value="09">Sep (09)</option>
                        <option value="10">Oct (10)</option>
                        <option value="11">Nov (11)</option>
                        <option value="12">Dec (12)</option>
                    </select>
                    </div>
                    <div className="col-xs-4">
                    <select className="form-control" name="expiry-year">
                        <option value="13">2013</option>
                        <option value="14">2014</option>
                        <option value="15">2015</option>
                        <option value="16">2016</option>
                        <option value="17">2017</option>
                        <option value="18">2018</option>
                        <option value="19">2019</option>
                        <option value="20">2020</option>
                        <option value="21">2021</option>
                        <option value="22">2022</option>
                        <option value="23">2023</option>
                    </select>
                    </div>
                </div>
                </div>
                <div className="form-group">
                    <textarea className="form-control"  placeholder="Message" rows="4"></textarea>
                </div>
                <button className="btn btn-default">Submit</button>
            </form>    
        </div>
        </div>  
        </div>
        </div>
        <Service />
    </>
  )
}

export default Home