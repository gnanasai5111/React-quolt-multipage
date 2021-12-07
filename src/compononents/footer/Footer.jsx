import React from 'react'

export default function Footer() {
    return (
        <>
        <section id="contactsection" className="contactinfo">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xs-12">
              <div className="address">
                <h3 className="location-address">Address:</h3>
                <ul className="nostyle">
                  <li> <i className="fa fa-map-marker move" aria-hidden="true"></i> &nbsp; Level G, Kalajyothi Building, Survey No:185,</li>
                  <li> Masjid Banda, Kondapur,</li>
                  <li> R.R. District, Hyderabad-500084.</li>
                </ul>
              </div>
              <div className="email">
                <h3 className="location-address">Email:</h3>
                <ul className="nostyle">
                  <li><i className="fa fa-envelope" aria-hidden="true"></i> &nbsp; info@quolt.com</li>
                </ul>
              </div>
              <div className="phone">
                <h3 className="location-address">Phone:</h3>
                <ul className="nostyle">
                  <li><i className="fa fa-mobile" aria-hidden="true"></i> &nbsp;040-67855555</li>
                </ul>
              </div>
  
              <div className="phone">
                <h3 className="location-address">Social:</h3>
                <ul className="nostyle">
                  <li>
                    <a href="https://www.instagram.com/quoltdesign/" target="_blank" rel="noreferrer"> <i className="fa fa-instagram footer-icons" aria-hidden="true" style={{marginRight: "20px",fontSize: "20px"}}></i> </a>
                    <a href="https://in.linkedin.com/company/quolt-design" target="_blank" rel="noreferrer"> <i className="fa fa-linkedin footer-icons" aria-hidden="true" style={{marginRight: "20px",fontSize: "20px"}}></i> </a>
                  </li>
                </ul>
              </div>
  
            </div>
       
            <div className="col-md-9 col-xs-12">
              <a rel="noreferrer" href="https://www.google.com/maps/place/Quolt+Design+Pvt+Ltd/@17.461891,78.342804,17z/data=!4m5!3m4!1s0x0:0x60c9265987fc613a!8m2!3d17.4618906!4d78.3428041?hl=en" target="_blank">
  
                <div className="conatiner mapvideo">
                  <video height="400px" width="100%" autoPlay muted>
                    <source src="../../images/map.mp4" type="video/mp4" />
                  </video>
                </div>
              </a>
            </div>
          </div>
        </div>
  
      </section>
    
      <footer className="lastfooter">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="top10">Copyright © 2021. Quolt Enterprises Pvt. Ltd. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      </>
    )
}
