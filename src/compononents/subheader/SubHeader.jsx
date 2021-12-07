import React from 'react';
import { Link } from 'react-router-dom';
import '../header/header.css'

export default function SubHeader() {
    return (
        <div className="main-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

              <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse main-nav" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item ">
                    <Link className="nav-link" to="/services">Services</Link>
                  
                    </li>
                  
                    {/* <li className="nav-item dropdown">
                    <Link className="nav-link" to="/work">Work</Link>
                     
                    </li> */}
                    <li class="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle " to="/work"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Work
                      </Link>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/work">Design Work</Link>
                        <Link className="dropdown-item" to="/lcr">Handheld Radio</Link>

                      </div>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/process">Process</Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                    </li>

                  </ul>
                  <div className="header-social-icon">
                    <ul style={{liststyleType:"none",margin:"0"}}>
                      <li><a href="https://www.instagram.com/quoltdesign/" target="_blank" rel="noreferrer"><i className="fa fa-instagram icons" style={{fontSize:"1.3rem"}}></i></a></li>
                      <li>
                        <a href="https://in.linkedin.com/company/quolt-design" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square icons" style={{fontSize:"1.3rem"}}></i></a>
                      </li>

                    </ul>
                  </div>
                </div>
              </nav>

            </div>
          </div>
        </div>
      </div>
    )
}
