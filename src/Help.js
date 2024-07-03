import React from "react";
import pic1 from "./images/myAccount.png";
export default function Help(){
    return(
        <>
           <div className="booking_bg">
                <p className="booking_heading">HAPPY TO HELP YOU!!!</p>
                <div className="booking">
                    <div className="booking_wrap help">
                        <div className="help-img"></div>
                        <div className="help-details"></div>
                    </div>
                </div>
                <img src={pic1} alt="" className="MyAccPic helpPic" />
           </div> 
        </>
    );
}