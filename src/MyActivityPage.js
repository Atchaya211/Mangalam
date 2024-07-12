import React from "react";
import "./style.css";

export default function MyActivity(){
    return(
        <div className="MyActivity_bg">
        <div className="UpcommingBook">
            <div className="activityRight">
                <p className="booking_heading myActivity_text" style={{marginLeft: "5%"}}>MY ACTIVITY</p>
                <div className="activity_img">
                    <div className="allFutureBookings"><p>Upcomming Events</p></div>
                </div>
                <p className="booking_heading" style={{margin: "5%"}}>PAST ACTIVITIES</p>
            </div>
            <div className="activityLeft">
                <div className="eventPlanner"></div>
                <p style={{fontSize:"large"}}>Looking For Event Planner?</p>
                <p>make a booking in minutes</p>
                <a href="/Services"><button className="book-btn">Book</button></a>
            </div>
        </div>
        <div className="pastBook">  
            <p>your past booking will be displayed here</p>
        </div>  
        </div>
    );
}

