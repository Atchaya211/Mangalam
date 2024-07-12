import React from "react";
import "./style.css";
export default function MyAccount(){
    return(
        <div className="MyAccount-bg">
        <div className="myAccRight">
            <div className='MyAccount-img'></div>
        </div>
        <div className="design-div">
        <div className="myAccLeft"></div>
            <div className="detailsWrap">
            <div className="details-div">
                <p className="MyAccText">Name :</p>
                <p className="MyAccText">Customer Name</p>
            </div>
            <hr className="horizontal-line"/>
            <div className="details-div">
                <p className="MyAccText">Mail Id :</p>
                <p className="MyAccText">Customer@gmail.com</p>
            </div>
            <hr className="horizontal-line"/>
            <div className="details-div">
                <p className="MyAccText">Phone number :</p>
                <p className="MyAccText">1234567890</p>
            </div>
            <hr className="horizontal-line"/>
            <div className="details-div">
                <p className="MyAccText">Address :</p>
                <p className="MyAccText">Customer address</p>
            </div>
            <hr className="horizontal-line"/>
            <a href="/EditProfile"><button className="edit-profile-btn">Edit</button></a>
            </div>
        
        </div>
        </div>
    );
}