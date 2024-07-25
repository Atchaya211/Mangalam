import React, {useState, useEffect} from "react";
import "./style.css";
import {getNotification, updateNotification} from "./api";
// import VendorData from "./vendorData.json";
export default function Notification(){
    const [vendors, setVendors] = useState([]);
    const [error, setError] = useState(null);

    // useEffect(()=>{
    //     setVendors(VendorData);
    // },[]);
    useEffect(()=>{
        const fetchNotification = async ()=>{
            try{
                const data = await getNotification();
                console.log("Fetched data:",data);
                setVendors(data.notification_data || []);
            } catch (error) {
                console.error("Error fetching vendors:", error);
                setError(error.message || "Failed to fetch data. Please try again later.");
            }
        };
        fetchNotification();
        // console.log("Vendor:",vendors);

    },[])

    const handleAccept = async (notify_id, status_val) => {
        // console.log(notify_id,status_val);
        try {
            console.log(notify_id);
            const response = await updateNotification(notify_id, status_val);
 	        const refreshedData = await getNotification();
            setVendors(refreshedData.notification_data || []);
            console.log('Response:', response);
            console.log(response.message);
        } catch (err) {
            console.error('Error updating notification:', err);
            if (err.response && err.response.data && err.response.data.message) {
                alert(err.response.data.message);
            } else {
                alert('An unknown error occurred');
            }
        }
    };
    return(
        <div className="wishList-bg">
            <div className="wishList-body">
                {vendors.map((vendor, i)=>(
                    <div className="notify-details" key={i}>
                        <h3>Order received</h3>
                        {/* <div className="vendor-name">
                            <h4>{vendor.customer_id}</h4>
                            <div className="rating-div">
                                <p>{vendor.city}</p>
                            </div>
                        </div> */}
                        <table className="event-details-table">
                            <tbody>
                                <tr>
                                    <td>Customer Name:</td>
                                    <td>{vendor.created_by.name}</td>
                                </tr>
                                <tr>
                                    <td>Event Date:</td>
                                    <td>{vendor.date}</td>
                                </tr>
                                <tr>
                                    <td>Event Time:</td>
                                    <td>{vendor.time}</td>
                                </tr>
                                <tr>
                                    <td>Event Location:</td>
                                    <td>{vendor.city}</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="vendor-text">Email: {vendor.created_by.email_id}</p>
                        <p className="vendor-text">Phone: {vendor.phone_no}</p><br />
                        <button className="vendor-btn notify-btn" onClick={() => handleAccept(vendor.id, 1)}>Accept</button>
                        <button className="vendor-btn notify-btn" onClick={() => handleAccept(vendor.id, 0)}>Cancel</button>
                    </div>
                    ))}
            </div>
        </div>
    );
}