import React from "react";
import "./style.css";
import logoImg from "./images/logo.png";
export default function Booking(){
    return(
        <div className="about_bg">
            <div className="about-body">
                <div className="loginPage-wrap" style={{marginTop: "-150px"}}>
                    <div className="common-text">
                        <img src={logoImg} alt="" className="bodyLogo about-common-img"/>
                        <p className="para about-common">
                            Turning Dreams Into Unforgettable Moments. Your Seamless Event Experience Starts Here With
                        </p>
                        <p className="paraHighlight about-common" style={{marginLeft:"20%"}}>
                            @Mangalam
                        </p> 
                    </div>
                </div>
                <div className="aboutText">
                    <p className="our-details">Welcome to <span>Mangalam</span> - Your Premier Event Partner! At Mangalam, we understand that life's most special moments deserve to be celebrated in a way that is truly memorable. Our platform is designed to be your one-stop destination for all your event needs, providing a seamless experience for booking services for Mehendi, Haldi, Marriage, Birthday, Anniversary, Pre-wedding, Destination Wedding, and our normal business hours are 9 am to 9 pm time excluding Holidays.</p>
                    <p className="our-Address">Our Company Address- KA IP extension New Delhi 110092 :</p>
                    <div className="our-contact">
                        <p className="our-phone">Phone : <span>XXXXX XXXXX</span></p>
                        <p className="our-phone">Our Email Is: <span>yyyy@manglam.tech</span></p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}