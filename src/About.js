import React from "react";
import "./style.css";
import logoImg from "./images/logo.png";
export default function Booking(){
    return(
        <div className="about_bg">
            <div className="loginPage-wrap">
                <div className="common-text">
                    <img src={logoImg} alt="" className="bodyLogo"/>
                    <p className="para">
                        Turning Dreams Into Unforgettable Moments. Your Seamless Event Experience Starts Here With
                    </p>
                    <p className="paraHighlight">
                        @Mangalam
                    </p> 
                </div>
            </div>
            <div className="aboutText"></div>
        </div>
    );
}