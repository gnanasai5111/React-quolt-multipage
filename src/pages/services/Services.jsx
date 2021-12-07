import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      <div class="breadcrumbs container">
        <Link to="/" className="breadcrumb-link">
          Home
        </Link>

        <div class="breadcrumbs-divider"></div>
        <Link to="/services" className="breadcrumb-link active">
          Services
        </Link>
      </div>
      <div className="ourservices">
        <div className="container">
          <h1 className="services-heading" style={{ marginBottom: "100px" }}>
            Our Services
          </h1>

          <div className="row servicebox">
            <div className="col-md-6 col-sm-12">
              <h4 className="text-title">Product &amp; Concept Design</h4>
              <p className="text-para">
                We offer Ergonomic, Aesthetic and User Centric design solutions
                to transform your ideas to reality. We start with research and
                provide comprehensive design solutions based on user feedback.
                Our capabilities range from Research and Concept design all the
                way to Production ready design
              </p>
            </div>
            <div className="col-md-6 col-sm-12">
              <img src="images/1.jpg" className="service-img" alt="design" />
            </div>
          </div>
          <div className="row" style={{ margin: "200px 0" }}>
            <div className="col-md-6 col-sm-12">
              <img src="images/2.jpg" className="service-img" alt="design" />
            </div>

            <div className="col-md-6 col-sm-12">
              <h4 className="text-title">Engineering design &amp; CAD</h4>
              <p className="text-para">
                We can help transform a Concept design to a production ready
                design for all scales of production. We can generate CAD files
                for manufacturers to use for production. We also offer
                manufacturing services.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h4 className="text-title">Prototyping </h4>
              <p className="text-para">
                We are capable of delivering POC (Proof Of Concept) enclosures
                for IOT devices, home appliances and other electronic equipment.
                We utilise a variety of methods and technologies including, 3D
                printing, Laser cutting, Water Jet cutting, CNC machining,
                Silicone molding and Vacuum casting to arrive at the desired
                outcome. We also offer low volume production and assembly of the
                units.
              </p>
            </div>
            <div className="col-md-6 col-sm-12">
              <img src="images/3.jpg" className="service-img" alt="design" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
