import React, {useState, useEffect} from "react";
import "./style.css";
import VendorData from "./vendorData.json";
import pic1 from "./images/marraige-hall-decor.jpg";
import pic2 from "./images/corporate-hall-decor.jpg";
import pic3 from "./images/marraige-hall.jpg";
import pic4 from "./images/corporate-hall.jpg";
import StarRating from "./StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
export default function DisplayVendors(){
    const [vendors, setVendors] = useState([]);
    // const [wishList, setWishList] = useState({});
    const images = [pic1,pic2,pic3,pic4];
    useEffect(()=>{
        const updatedVendors = VendorData.map(vendor => ({ ...vendor, wishlisted: false }));
        setVendors(updatedVendors);
    },[]);
    const toggleWishList = (vendorId) => {
        setVendors((prevVendors) =>
            prevVendors.map((vendor) =>
                vendor.id === vendorId ? { ...vendor, wishlisted: !vendor.wishlisted } : vendor
            )
        );
    };
    return(
        <div className="dispVendors-bg">
            <div className="dispVendors-body">
                <div className="dispVendor-wrap">
                    {vendors.map((vendor, i)=>(
                        <div className="vendor-details" key={i}>
                            <img src={images[i % images.length]} alt={vendor.name} className="dispVendor-img"/>
                            <div className="vendor-name">
                                <h4>{vendor.name}</h4>
                                <div className="rating-div">
                                    <p>{vendor.location}</p>
                                    <StarRating totalStars={5} initialRating={vendor.rating}/>
                                </div>
                                <FontAwesomeIcon icon={vendor.wishlisted ? solidHeart : regularHeart} style={{ color: "rgb(255, 0, 0)", cursor: "pointer" }} onClick={() => toggleWishList(vendor.id)}/>
                                {/* <i class="fa-regular fa-heart" style={{color: "rgb(255, 0, 0)"}}></i> */}
                            </div>
                            <p className="vendor-text">Email: {vendor.email}</p>
                            <p className="vendor-text">Phone: {vendor.phone}</p>
                            <button className="vendor-btn"><a href="/">Check Availability</a></button>
                        </div>
                    ))}
                </div>
                <div className="corner-bg"></div>
                <div className="border-bg"></div>
            </div>
        </div>
    );
}