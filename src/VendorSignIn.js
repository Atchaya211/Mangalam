import React, {useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import eye from "./images/eye-solid.svg";
import eyeClose  from "./images/eye-slash-solid.svg";

export default function SignInPage(){
    const navigate = useNavigate();
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidName, setIsValidName] = useState(true);
    const [isValidPhno, setIsValidPhno] = useState(true);
    const [name, setName ] = useState("");
    const [contactPersonName, setContactPersonName] = useState("");
    const [mailId, setMailId] = useState("");
    const [ phoneNo, setPhoneNo] = useState(0);
    const [countryCodeLength, setCountryCodeLength] = useState(0);
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeClose);
    const [password,setPassword] = useState("");
    const confmPass = useRef(null);
    const [showNextPg, setShowNextPg] = useState(false);
    // const [selectedImg, setSelectedImg] = useState(null);
    const [textareaVal, setTextareaVal] = useState("");
    const [gst, setGst] = useState(false);
    const [gstNo, setGstNo] = useState("0");
    // const [service, setService] = useState("");
    // const [location,setLocation] = useState("");
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
    const handleCity = (event)=>{
        setCity(event.target.value);
    }

    const availableEvents =[
        "Venue booking",
        "theme & decor",
        "Mehndi artist",
        "Food & Catering",
        "event organizer",
        "Beauty Artisan",
        "Transportation",
        "Digital services",
        "Entertainment"
    ];
    const [eventType, setEventType ] = useState("");
    const handleEventType = (event)=>{
        setEventType(event.target.value);
    };

    const handleEmail = (event) => {
        const regexp = /^[a-zA-Z0-9]+[^!#$%&~]*@gmail\.(com|in|org)$/;
        const value = event.target.value;
        if(regexp.test(value)){
            setIsValidEmail(true);
            setMailId(value);
        }
        else{
            setIsValidEmail(false);
        }
    };
    const handleName = (event)=>{
        const regexp = /^[A-Za-z ]+$/;
        const value = event.target.value;
        if(regexp.test(value)){
            setIsValidName(true);
            setName(value);
        }
        else{
            setIsValidName(false);
        }
    };
    const handleContactName = (event) =>{
        const regexp = /^[A-Za-z ]+$/;
        const value = event.target.value;
        if(regexp.test(value)){
            setIsValidName(true);
            setContactPersonName(value);
        }
        else{
            setIsValidName(false);
        }
    }
    
    const handleVisiblility = () =>{
        if(type==='password'){
            setIcon(eye);
            setType("text");
        }
        else{
            setIcon(eyeClose);
            setType("password");
        }
    };
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
    };
    const handlePassword =(event)=>{
        setPassword(event.target.value);
    };
    const validatePassword = ()=>{
        if(confmPass.current.value !== password){
            alert("Please enter correct password in confirm password field!!");
            return false;
        }
        else{
            return true;
        }
    }
    const handlePhoneKeyDown = (event) => {
        const input = event.target;
        const cursorPosition = input.selectionStart;
        if (event.key === "Backspace" && cursorPosition <= countryCodeLength) {
            event.preventDefault();
        }
    };
    const handleShow = ()=>{
        if(isValidEmail && isValidName && isValidPhno && password && confmPass.current && confmPass.current.value){
            if(validatePassword()){
                setShowNextPg(true);
            }
            else{
                setShowNextPg(false);
            }
        }
        else{
            alert("Please fill all the fields!!");
        }
    };
    // const handleImageChange = (event)=>{
    //     setSelectedImg(event.target.files[0]);
    // };
    const handleTextarea= (event)=>{
        setTextareaVal(event.target.value);
    };
    const handleSubmit=  (event)=>{
        event.preventDefault();
        if(contactPersonName && textareaVal && gst){
            // console.log(name);
            // console.log(mailId);
            // console.log(phoneNo);
            // console.log(password);
            // console.log(selectedImg);
            console.log(eventType);
            console.log(city);
            const userData = {
                "organization_name": name,
                "person_name":contactPersonName,
                "full_address": textareaVal,
                "email_id": mailId,
                "password": password,
                "phone_no": phoneNo,
                "service": eventType,
                "location": city,
                "gst_no": gstNo
            };
            navigate("/VendorMobileVerification" ,   { state: { userData } });

            // console.log(userData);
            // try {
            //     const response = await registerVendor(userData);
            //     console.log(response);
            //     alert("Registration successful!");
            // } catch (error) {
            //     alert(error);
            // }
        }
    };
    const handleGstBtn = (event) =>{
        setGst(event.target.value);
    }
    const handeGstNo = (event) =>{
        setGstNo(event.target.value);
    }
    // const handleService = (event) =>{
    //     setService(event.target.value);
    // }
    return(
        <form action="" method="post" enctype="multipart/form-data" className="login sign-in" onSubmit={handleSubmit}>
        <p className="welcome-msg">Hey! Let's Get Started</p>
        {!showNextPg && (<><input type="text" placeholder="Enter your Username" onChange={(event)=>{handleName(event);}} className="login-field" required/>
        {!isValidName && <p className={!isValidName ?"err":"noerr"}>Please enter your name correctly.</p>}
        <input type="email" placeholder="Enter Email" onChange={(event)=>{handleEmail(event);}} className="login-field" required/>
        {!isValidEmail && <p className={!isValidEmail ?"err":"noerr"}>Please enter a valid email address.</p>}
        <PhoneInput country={"in"} value={phoneNo} onChange={handlePhone} onKeyDown={handlePhoneKeyDown} buttonStyle={{border:"0px",height:"35px",backgroundColor:"transparent", marginTop:"4px"}} inputStyle={{border:"0px",width:"90%"}} containerStyle={{height:"39px", width:"90%",alignSelf:"center", border:"1px solid darkgrey",borderRadius:"10px",padding:"1px",margin: "4%"}} required/>
        {!isValidPhno && <p className={!isValidPhno ?"err":"noerr"}>Please enter a valid phone number.</p>}
        <div className="login-field password-wrap">
            <input type={type} minLength={8} maxLength={8} id="password" placeholder="Enter Password" className="password-inp" onChange={(event)=>{handlePassword(event)}} required/>
            <button onClick={handleVisiblility} className="eye-icon-btn">
                <img src={icon} alt="" className="eye-icon"/>
            </button>
        </div>
        <div className="login-field password-wrap">
            <input type={type} minLength={8} maxLength={8} id="confirm-password" ref={confmPass} placeholder="Confirm Password" className="password-inp" required/>
            <button onClick={handleVisiblility} className="eye-icon-btn">
                <img src={icon} alt="" className="eye-icon"/>
            </button>
        </div>
        <button type="button" className="submit-btn signin-btn" onClick={handleShow}>Next</button></>)}

        {showNextPg && (<>
            <input type="text" placeholder="Contact person name" onChange={(event)=>{handleContactName(event);}} className="login-field" required/>
            {!isValidName && <p className={!isValidName ?"err":"noerr"}>Please enter your name correctly.</p>}
            <textarea id="address" value={textareaVal} onChange={handleTextarea} rows={6} cols={10} placeholder="Enter your address" className="addTextarea" required></textarea>
            <select id="city" value={city} style={{width:"90%"}} className="search-addr in-signin-page" onChange={handleCity} required>
                    {city === '' && <option value="" >City</option>}
                    {availableCities.map((current)=>(<option key={current} value={current}>{current}</option>))}
                </select>
            <select value={eventType} style={{width:"90%"}} className="search-addr in-signin-page" onChange={handleEventType} required>
                {eventType === '' && <option value="" >Enter event type</option>}
                {availableEvents.map((current)=>(<option key={current} value={current}>{current}</option>))}
            </select>
            <div className="gst-inp">
                <label htmlFor="">
                    Have GST No:
                    <label htmlFor="" className="gst-sub">
                        Yes
                        <input type="radio" name="GST" value="true" onChange={handleGstBtn}/>
                    </label>
                    <label htmlFor="" className="gst-sub">
                        No
                        <input type="radio" name="GST" value="false" onChange={handleGstBtn}/>
                    </label>
                </label>
            </div>
            {gst==="true" && (<input type="text" placeholder="GST No" className="login-field" onChange={(event)=>{handeGstNo(event)}}/>)}
            {/* <input type="text" placeholder="Service that you provide" onChange={(event)=>{handleService(event)}} className="login-field" required/>
             */}
            <p style={{margin: "10px"}}>By creating an account you agree to our <a href="# " style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.</p>
            <button type="submit" className="submit-btn signin-btn">Sign in</button>
        </>)}
    </form>
    );
}
