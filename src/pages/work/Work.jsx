import React from "react";
import './work.css'
import Popup from "../../compononents/popup/Popup";
import popups from "../../popups";



function Work(props){
    
    return (
        <>
        <div className="col-lg-4 col-md-6 col-sm-12 ourworkbox ">
        <div className="ourworkdiv">
          <img  className={`ourworkimage ${props.classNameattribute}`}  src={`images/works/${props.src}.jpg`} data-toggle="modal" data-target={`#popup-${props.target}`} alt={`${props.alt}-img`}   />
          <h4 className="overlayheading">{props.overlayheading}<span className="sub-heading"><i>{props.overlaysubheading}</i></span></h4>
        </div>
         {popups.map((popup)=>{
            return (
                <Popup 
                key={popup.id}
                num={popup.num}
                heading={popup.heading}
                src={popup.src} />
            )
        })}

      </div>
     
       
      </>
      
  

    );
}
export default Work;