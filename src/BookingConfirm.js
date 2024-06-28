import React from "react";
import "./style.css";
import thumbsUp from "./images/thumbsUp.png";
import success from "./images/successful.png";
export default function BookingConfirm({onClose}){
    return(
        <div className="subMenu successWrap" onClick={onClose}>
            <div className="subMenu_Content success_content">
            <div className="success_text">
                <p className="success_mainText">SUCCESSFULLY BOOKED!!!</p>
                <p className="success_subText">Our Event Planner will be meeting you as per the scheduled time</p>
            </div>
            <div className="success_img">
                <img src={success} alt="" className="success"/>
                <img src={thumbsUp} alt="" className="thumbsUp"/>
            </div>   
            </div>
        </div>
    );
}
