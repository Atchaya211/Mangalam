import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./style.css";
import pic1 from "./images/myAccount.png";
import PhoneInput from "react-phone-input-2";
import BookingConfirm from "./BookingConfirm";
export default function Booking(){
    const navigate = useNavigate();
    const availableEvents =[
        "Hindu Marraige",
        "Christian Marraige",
        "Engagement",
        "Corporate Event",
        "Birthdays",
        "Baby Shower",
        "Proposals",
        "Other Celebrations"
    ];
    const [eventType, setEventType ] = useState("");
    const availableCities = [
        "Delhi",
        "Chennai",
        "Bengaluru",
        "Mumbai",
        "Hyderabad",
        "Ahmedabad",
        "Kolkata",
        "Surat",
        "Pune",
        "Jaipur"
      ];
    const [ city, setCity ] = useState("");
    const [showSuccess , setShowSuccess] = useState(false);
    const [ phoneNo, setPhoneNo] = useState(0);
    const [countryCodeLength, setCountryCodeLength] = useState(0);
    const [isValidPhno, setIsValidPhno] = useState(true);
    const handleEventType = (event)=>{
        setEventType(event.target.value);
    };
    const handleCity = (event)=>{
        setCity(event.target.value);
    }
    const successfullBooking = (event) =>{
        event.preventDefault();
        if(isValidPhno===true){
            setShowSuccess(true);
        }
        else{
            alert("Please Fill all the input fields!!!");
        }
    }
    const onClose = ()=>{
        setShowSuccess(false);
        navigate('/MyActivity');
        
    }
    const handlePhone = (value, country) =>{
        setPhoneNo(value);
        const dialCode = country.dialCode;
        setCountryCodeLength(dialCode.length + 1);
        const regexp = /^[0-9]{10}$/;
        const phNo = value.substring(2);
        if(regexp.test(phNo)){
            setIsValidPhno(true);
        }
        else{
            setIsValidPhno(false);
        }
    }
    const handlePhoneKeyDown = (event) => {
        const input = event.target;
        const cursorPosition = input.selectionStart;
        if (event.key === "Backspace" && cursorPosition <= countryCodeLength) {
            event.preventDefault();
        }
    };
    const getTomorrowDate = () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 2);
        return tomorrow.toISOString().split('T')[0];
    };
    const minTime = "09:00";
    const maxTime = "17:00";
    return(
        <>
        <div className="booking_bg">
        <p className="booking_heading">SCHEDULE APPOINTMENT WITH PLANNER</p>
        <form className="booking" onSubmit={successfullBooking}>
            <div className="booking_wrap">
                <div className="booking_inp_text">
                    <select value={eventType} style={{width:"90%"}} className="login-field book" onChange={handleEventType} required>
                        {eventType === '' && <option value="" >Enter event type</option>}
                        {availableEvents.map((current)=>(<option key={current} value={current}>{current}</option>))}
                    </select>
                    <input type="text" placeholder="Enter full address" className="login-field book" required/>
                    <PhoneInput country={"in"} value={phoneNo} onChange={handlePhone} onKeyDown={handlePhoneKeyDown} buttonStyle={{border:"0px",height:"35px",backgroundColor:"transparent", marginTop:"4px"}} inputStyle={{border:"0px",width:"90%"}} containerStyle={{height:"35px", width:"90%",alignSelf:"center", border:"1px solid darkgrey",borderRadius:"10px",padding:"1px",marginTop:"4%", marginLeft:"2%"}}/>
                    {!isValidPhno && <p className={!isValidPhno ?"err":"noerr"}>Please enter a valid phone number.</p>}
                    <input type="text" placeholder="Enter preferences" className="login-field book" required/>
                </div>
                <div>
                    <div className="drop_search">
                        <label htmlFor="city">Select City</label>
                        <select id="city" value={city} style={{width:"90%"}} className="login-field search-addr" onChange={handleCity} required>
                            {city === '' && <option value="" >City</option>}
                            {availableCities.map((current)=>(<option key={current} value={current}>{current}</option>))}
                        </select>
                    </div>
                    <div  className="drop_search">
                        <label htmlFor="date">Schedule date</label>
                        <input id="date" type="date" className="login-field search-addr"  min={getTomorrowDate()}  required/>
                    </div>
                    <div  className="drop_search">
                        <label htmlFor="time">Schedule time</label>
                        <input id="time" type="time" className="login-field search-addr" min={minTime} max={maxTime} required/>
                    </div>
                </div>
            </div>
           <button type="submit" className="booking_btn">Submit</button>
           {showSuccess && (
            <BookingConfirm onClose={onClose}/> 
           )}
           </form>
        </div>
            <img src={pic1} alt="" className="MyAccPic" />
           <p className="lastText">Book Your Appointment Now!</p>
        </>
    );
}