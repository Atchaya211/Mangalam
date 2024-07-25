import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { getBeautyArtist, getEntertainment, getDigitalService, getMehendiArtist, getEventOrganizer, getThemeAndDecor } from './api';
import "./style.css";
import pic1 from "./images/marraige-hall-decor.jpg";
import pic2 from "./images/corporate-hall-decor.jpg";
import pic3 from "./images/marraige-hall.jpg";
import pic4 from "./images/corporate-hall.jpg";
import StarRating from "./StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

export default function DisplayVendors() {
    const [vendors, setVendors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const images = [pic1, pic2, pic3, pic4];
    const location = useLocation();
    const { service } = location.state || {};

    useEffect(() => {
        const fetchVendors = async () => {
            setLoading(true);
            setError(null);
            try {
                if (!service) {
                    throw new Error('Service parameter is missing.');
                }
                if(service === "Beauty Artisan"){
                const data = await getBeautyArtist(service);
                console.log('Fetched data:', data);
                setVendors(data.beautyartisan || []);
                }
                if(service === "Entertainment"){
                    const data = await getEntertainment(service);
                    console.log('Fetched data:', data);
                    setVendors(data.entertainments || []);
                }
                if(service === "Digital services"){
                    const data = await getDigitalService(service);
                    console.log('Fetched data:', data);
                    setVendors(data.digital_service || []);
                }
                if(service === "Mehndi artist"){
                    const data = await getMehendiArtist(service);
                    console.log('Fetched data:', data);
                    setVendors(data.mendhiartist || []);
                }
                if(service === "event organizer"){
                    const data = await getEventOrganizer(service);
                    console.log('Fetched data:', data);
                    setVendors(data.evevt_organizer || []);
                }
                if(service === "theme & decor"){
                    const data = await getThemeAndDecor(service);
                    console.log('Fetched data:', data);
                    setVendors(data.themeAndDecore || []);
                }

            } catch (error) {
                console.error("Error fetching vendors:", error);
                setError(error.message || "Failed to fetch data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchVendors();
    }, [service]);

    const toggleWishList = (vendorId) => {
        setVendors((prevVendors) =>
            prevVendors.map((vendor) =>
                vendor.id === vendorId ? { ...vendor, wishlisted: !vendor.wishlisted } : vendor
            )
        );
    };

    return (
        <div className="dispVendors-bg">
            <div className="dispVendors-body">
                {loading && <p>Loading...</p>}
                {error && <p className="error-message">{error}</p>}
                {!loading && !error && (<>
                    <div className="filters-btn-box">
                        <button className="filters-btn">Near-By</button>
                        <button className="filters-btn">Top-pics</button>
                        <button className="filters-btn">Low cost</button>

                    </div>
                    <div className="dispVendor-wrap">
                        {vendors.length > 0 ? (
                            vendors.map((vendor, i) => (
                                <div className="vendor-details" key={i}>
                                    <img src={images[i % images.length]} alt={vendor.person_name} className="dispVendor-img"/>
                                    <div className="vendor-name">
                                        <h4>{vendor.person_name}</h4>
                                        <div className="rating-div">
                                            {/* <p>{vendor.location}</p> */}
                                            <StarRating totalStars={5} initialRating={vendor.rating}/>
                                        </div>
                                        <FontAwesomeIcon
                                            icon={vendor.wishlisted ? solidHeart : regularHeart}
                                            style={{ color: "rgb(255, 0, 0)", cursor: "pointer" }}
                                            onClick={() => toggleWishList(vendor.id)}
                                        />
                                    </div>
                                    <p className="vendor-text">Email: {vendor.email_id}</p>
                                    <p className="vendor-text">Phone: {vendor.phone_no}</p>
                                    <button className="vendor-btn"><a href="/Booking">Check Availability</a></button>
                                </div>
                            ))
                        ) : (
                            <p>No vendors found.</p>
                        )}
                    </div>
                </>)}
                <div className="corner-bg"></div>
                <div className="border-bg"></div>
            </div>
        </div>
    );
}
