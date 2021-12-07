import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div class="breadcrumbs container">
        <Link to="/" className="breadcrumb-link">
          Home
        </Link>

        <div class="breadcrumbs-divider"></div>
        <Link to="/about" className="breadcrumb-link active">
          About
        </Link>
      </div>
      <div class="container " style={{ marginTop: "100px" }}>
        <h1 class="clients-heading" style={{ marginBottom: "100px" }}>
          About us
        </h1>
      </div>
      <div id="services-container " class="service-bg-box">
        <div
          class="service-bg-image"
          style={{ backgroundImage: "url(../../images/aboutus/1.jpg)" }}
        ></div>
      </div>

      <div
        class="container"
        style={{ position: "relative", margin: "200px auto" }}
      >
        <p class="aboutus-para">
          <strong style={{ fontSize: "2rem" }}>Quolt </strong> was formed in
          2016 with the vision to blend Design ,Technology and Innovation to
          meet futuristic requirements. Quolt is driven by Design entrepreneurs
          with variety of skills in the field of Industrial Design . Quolt has
          wide portfolio of products &amp; services in various sectors in the
          industry like automobile, toy, medical and pharmaceutical, defence,
          IOT, furniture, electronics, safety etc; which has helped the team to
          hone their skills and deliver quality products.
        </p>
      </div>

      <div
        class="service-bg-image"
        style={{ backgroundImage: "url(../../images/aboutus/6.jpg)" }}
      ></div>

      <div class="awards container" style={{ margin: "200px auto" }}>
        <h1 class="awards-heading" style={{ margin: "50px auto" }}>
          Award
        </h1>
        <div class="table-responsive" style={{ marginTop: "100px" }}>
          <table class="table">
            <thead class="awards_list-header">
              <tr>
                <th>Year</th>
                <th>Award</th>
                <th>Category</th>
                <th>Client</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody class="awards_list-header award-list-bottom-border">
              <tr>
                <td>2018</td>
                <td>K-Design award Finalists</td>
                <td>Vortex</td>
                <td>K-design</td>
                <td>India</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
