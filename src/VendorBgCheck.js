import React from "react";
import "./style.css";
import logoImg from "./images/logo.png";

export default function VendorHome(){
    return(
        <div className="home">
            <div className="home_body">
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
                <div className="form-wrap">
                    <div className="login">
                    <p className="welcome-msg">Verification time!!!</p>
                    <p className="paraHighlight" style={{marginTop:"10%"}}>Please allow up to 24 hours for us to complete your background check.
                    You will receive access to create a username and password once you get verified..</p>
                    </div>
                </div>
            </div>
        </div>
    );
}