import React, {useState, useEffect} from "react";
import "./style.css";
import VendorData from "./vendorData.json";
export default function Notification(){
    const [vendors, setVendors] = useState([]);
    useEffect(()=>{
        setVendors(VendorData);
    },[]);
    
    return(
        <div className="wishList-bg">
            <div className="wishList-body">
                {vendors.map((vendor, i)=>(
                    <div className="wishList-details" key={i}>
                        <div className="vendor-name">
                            <h4>{vendor.name}</h4>
                            <div className="rating-div">
                                <p>{vendor.location}</p>
                            </div>
                        </div>
                        <p className="vendor-text">Email: {vendor.email}</p>
                        <p className="vendor-text">Phone: {vendor.phone}</p><br />
                        <button className="vendor-btn notify-btn">Accept</button><br />
                        <button className="vendor-btn notify-btn">Cancel</button>
                    </div>
                    ))}
            </div>
        </div>
    );
}