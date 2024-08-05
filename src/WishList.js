import React, {useState, useEffect} from "react";
import "./style.css";
import pic1 from "./images/marraige-hall-decor.jpg";
import pic2 from "./images/corporate-hall-decor.jpg";
import pic3 from "./images/marraige-hall.jpg";
import pic4 from "./images/corporate-hall.jpg";
import StarRating from "./StarRating";
import {getAllWishlist} from "./api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
export default function WishList(){
    const [vendors, setVendors] = useState([]);
    const images = [pic1,pic2,pic3,pic4];
    useEffect(()=>{
        const fetchWishlist = async () =>{
            try{
                const data = await getAllWishlist();
                console.log('Fetched data:', data);
                setVendors(data.wishlist || []);
            }catch(err){
                console.error("Error fetching vendors:", err);
            }
        };
        fetchWishlist();
    },[]);
    const toggleWishList = (vendorId) => {
        setVendors((prevVendors) =>
            prevVendors.map((vendor) =>
                vendor.id === vendorId ? { ...vendor, wishlisted: !vendor.wishlisted } : vendor
            )
        );
    };
    return(
        <div className="wishList-bg">
            <div className="wishlist-center">
            <div className="wishList-body">
                {vendors.map((vendor, i)=>(
                    <div className="wishList-details" key={i}>
                        <img src={images[i % images.length]} alt={vendor.name} className="dispVendor-img"/>
                        <div className="vendor-name">
                            <h4>{vendor.name}</h4>
                            <div className="rating-div">
                                <p>{vendor.location}</p>
                                <StarRating totalStars={5} initialRating={vendor.rating}/>
                            </div>
                            <FontAwesomeIcon icon={vendor.wishlisted ? regularHeart : solidHeart} style={{ color: "rgb(255, 0, 0)", cursor: "pointer"}} onClick={() => toggleWishList(vendor.id)}/>
                        </div>
                        <p className="vendor-text">Email: {vendor.email}</p>
                        <p className="vendor-text">Phone: {vendor.phone}</p>
                        <button className="vendor-btn"><a href="/">Check Availability</a></button>
                    </div>
                    ))}
            </div>
            </div>
        </div>
    );
}