import React from "react";
import './../../pages/work/work.css';

function Popup(props){
    return (

    <section>
    <div className="modal fade" id={`popup-${props.num}`} role="dialog">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <span className="close" data-dismiss="modal">&times;</span>
          <h3 className="popup-heading">{props.heading} </h3>
          <img src={props.src} className="img-responsive" alt="img" />
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

  </section>
    )
}

export default Popup;