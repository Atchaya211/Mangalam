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
            <div className="detailsWrap vendor-display-wrap">
            <div className="details-div">
                <p className="MyAccText vendor-text">Username :</p>
                <p className="MyAccText vendor-text">Vendor Name</p>
            </div>
            <hr className="horizontal-line"/>
            <div className="details-div">
                <p className="MyAccText vendor-text">Mail Id :</p>
                <p className="MyAccText vendor-text">vendor@gmail.com</p>
            </div>
            <hr className="horizontal-line"/>
            <div className="details-div">
                <p className="MyAccText vendor-text">Phone number :</p>
                <p className="MyAccText vendor-text">1234567890</p>
            </div>
            <hr className="horizontal-line"/>
            <div className="details-div">
                <p className="MyAccText vendor-text">Address :</p>
                <p className="MyAccText vendor-text">Vendor address</p>
            </div>
            <hr className="horizontal-line"/>
            <div className="details-div">
                <p className="MyAccText vendor-text">Contact Person :</p>
                <p className="MyAccText vendor-text">Contact Person Name</p>
            </div>
            <hr className="horizontal-line"/>
            <div className="details-div">
                <p className="MyAccText vendor-text">GST NO :</p>
                <p className="MyAccText vendor-text">1253</p>
            </div>
            <hr className="horizontal-line"/>
            <a href="/EditProfileVendor"><button className="edit-profile-btn">Edit</button></a>
            </div>
        
        </div>
        </div>
    );
}