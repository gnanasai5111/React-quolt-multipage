import React,{ useState ,useRef} from "react";
import "../about/about.css";
import { Link } from "react-router-dom";

export default function Contact() {
    const [popup,setPopup]=useState(false);
    const [popupFalse,setPopupFalse]=useState(false);
    const fNameRef=useRef();
    const lNameRef=useRef();
    const emailRef=useRef();
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(fNameRef.current.value);
        if(fNameRef.current.value.length>3 && lNameRef.current.value.length>3 && emailRef.current.value.length>3){
            setPopup(true);
            setTimeout(()=>{
                setPopup(false);
    
            },2000)
        }
        else{
            setPopupFalse(true);
            setTimeout(()=>{
                setPopupFalse(false);
    
            },2000)

        }
       
        
        
    }
  return (
    <>
      <div className="breadcrumbs container">
        <Link to="/" className="breadcrumb-link">
          Home
        </Link>

        <div className="breadcrumbs-divider"></div>
        <Link to="/contact" className="breadcrumb-link active">
          Contact
        </Link>
      </div>
      <div className="container contact-container">
        <div className="row">
          <div className="col-12">
            <h2 className="contact-title">Get in Touch</h2>
          </div>
          <div className="col-lg-8">
            <form
              className="form-contact contact_form"
              action="/contact"
              method="post"
              id="contactForm"
            >
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="fname"
                      id="name"
                      type="text"
                      ref={fNameRef}
                
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="lname"
                      id="lname"
                      type="text"
                      ref={lNameRef}
           
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="email"
                      id="email"
                      type="email"
                      ref={emailRef}
        
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <button type="submit" className="button button-contactForm" onClick={(e)=>handleSubmit(e)}>
                  Send Message
                </button>
                {popup && <p style={{marginTop:"30px",color:"blueviolet"}}>Sent Successfully.</p>}
                {popupFalse && <p style={{marginTop:"30px",color:"red"}}>Please Fill out the fields.</p>}
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i
                  className="fa fa-home contact-icon-page"
                  style={{ fontSize: "40px" }}
                ></i>
              </span>
              <div className="media-body">
                <h3>Kondapur, Hyderabad.</h3>
                <p>Kalajyothi Buiding,500084</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="fa fa-mobile " style={{ fontSize: "40px" }}></i>
              </span>
              <div className="media-body">
                <h3> 040-67855555</h3>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i
                  className="fa fa-envelope contact-icon-page"
                  style={{ fontSize: "40px" }}
                ></i>
              </span>
              <div className="media-body">
                <h3> info@quolt.com</h3>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
