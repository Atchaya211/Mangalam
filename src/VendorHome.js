import React, {useState, useEffect} from "react";
import "./style.css";
import logoImg from "./images/logo.png";
import Notification from "./NotificationData.json";
export default function VendorHome(){
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const updatedOrders = Notification.map(order => ({ ...order}));
        setOrders(updatedOrders);   
    }, []);
    return(
        <div className="home">
            <div className="home_body">
                <div className="loginPage-wrap">
                    <div className="common-text">
                        <img src={logoImg} alt="" className="bodyLogo" style={{marginLeft: "2%"}}/>
                        <p className="para" style={{marginLeft: "5%"}}>
                            Turning Dreams Into Unforgettable Moments. Your Seamless Event Experience Starts Here With
                        </p>
                        <p className="paraHighlight">
                            @Mangalam
                        </p>
                    </div>
                 </div>
                 <div className="pending-works">
                    <p className="welcome-msg pending-heading">Pending Orders!!!</p>
                    <div className="notification">
                        <table className="orders-table">
                            {orders.map((order) => (
                                    <tr key={order.id} className="pending-order">
                                        <td><h3>{order.name}</h3></td>
                                        <td><p>Phone: {order.phoneNo}</p></td>
                                        <td><p>Date: {order.date}</p></td>
                                    </tr>
                                ))}
                        </table>
                    </div>
                 </div>
            </div>
        </div>
    ); 
}