import React from "react";
import { Link } from "react-router-dom";

export default function Lcr() {
  return (
    <>
      <div className="breadcrumbs container">
        <Link to="/" classNameName="breadcrumb-link">
          Home
        </Link>

        <div className="breadcrumbs-divider"></div>
        <Link to="/lcr" classNameName="breadcrumb-link active">
          Handheld Radio
        </Link>
      </div>

      <section className="lcr-box">
        <div className="lcr container">
          <h1 className="clients-heading" style={{ marginBottom: "100px" }}>
            Handheld Radio
          </h1>

          <p className="text-para">
            {" "}
            Handheld rado is a 2-way communication device with IP68 rated design
            and can withstand the standard MIL grade drop tests.The design was
            envisioned keeping in mind,the modern day technological requirements
            and user-centered aesthetics.{" "}
          </p>
          <img src="images/popups/lcr/1.jpg" className="img-responsive" alt="lcr" />
          <p className="text-para">
            {" "}
            <strong> Analog/Digital </strong> - Get all the benefits of digital,
            including better voice quality, better range and better battery life
            – but retain compatibility with your existing radio fleet. With
            analog and digital capability, you have the freedom to migrate to
            the latest technology at your own pace.{" "}
          </p>
          <img src="images/popups/lcr/2.jpg" className="img-responsive" alt="lcr" />
          <p className="text-para">
            {" "}
            <strong> Compatible with Radio Management Suite </strong> - Program
            your radios quickly and efficiently, with the Radio Management tool.
            Radios can be programmed in batches to a standardized template,
            giving error-free results and optimized performance.{" "}
          </p>
          <img
            src="images/popups/lcr/7.jpg"
            className="img-responsive mg-green-lcr"
            alt="lcr"
          />
          <img src="images/popups/lcr/3.jpg" className="img-responsive" alt="lcr" />
          <p className="text-para">
            {" "}
            <strong> Dual Capacity Direct Mode </strong> - Utilize the power of
            the 2-slot TDMA DMR standard to double the capacity of your 12.5 kHz
            channel – without the need for a repeater.{" "}
          </p>
          <img src="images/popups/lcr/4.jpg" className="img-responsive" alt="lcr" />
          <p className="text-para">
            {" "}
            <strong> IP68 Rated </strong> - Dustproof and splashproof, so you
            can work with confidence in challenging environments.{" "}
          </p>
          <img src="images/popups/lcr/5.jpg" className="img-responsive" alt="lcr" />
          <p className="text-para ">
            {" "}
            <strong> Frequency range </strong> is VHF (136-174 MHz) and UHF
            (400-470 MHz).Battery life (based on a 05 05 90 duty cycle) is 18.5
            hours in digital mode and 14.5 hours in analog mode. Standard
            battery chemistry type is Lithium Ion (2200mAH).Frequency bands are
            in VHF and UHF modes with 4 Watt Mode and 1 Watt Mode.{" "}
          </p>
          <img src="images/popups/lcr/6.jpg" className="img-responsive" alt="lcr" />
        </div>
      </section>
    </>
  );
}
