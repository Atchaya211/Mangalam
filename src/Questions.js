import React from "react";
import "./style.css";
import { useLocation } from 'react-router-dom';

export default function Venue_Booking_question(){
    const location = useLocation();
    const { service } = location.state || {};
    return(
        <div className="dispVendors-bg">
            <div className="dispVendors-body">
                <h1>{service}</h1>
                <div className="question-center">

                </div>
            </div>
        </div>
    );
}