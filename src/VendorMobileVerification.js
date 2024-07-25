import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { phoneOtp, verifyPhOtp } from './api';
// import { useUser } from "./UserContext";
import "./style.css";
import logoImg from "./images/logo.png";
import PhoneInput from "react-phone-input-2";

export default function VendorVerification(){
    const location = useLocation();
    const userData = location.state.userData;
    const navigate = useNavigate();
    const [ phoneNo, setPhoneNo] = useState("");
    const [countryCodeLength, setCountryCodeLength] = useState(0);
    const [page, setPage] = useState("phone");
    const [otp, setOtp] = useState("");
    // const [generatedOtp, setGeneratedOtp] = useState("");
    const [error, setError] = useState(null);
    const handlePhone = (value, country) =>{
        setPhoneNo(value);
        const dialCode = country.dialCode;
        setCountryCodeLength(dialCode.length + 1);
        // const regexp = /^[0-9]{10}$/;
        // const phNo = value.substring(2);  
    }
    const handlePhoneKeyDown = (event) => {
        const input = event.target;
        const cursorPosition = input.selectionStart;
        if (event.key === "Backspace" && cursorPosition <= countryCodeLength) {
            event.preventDefault();
        }
    }

    const handleRender = async (value) =>{
        if(phoneNo === userData.phone_no){
        if (value === "OTP") {
            // Generate a random 4-digit OTP
            try{
                const token = await phoneOtp(phoneNo);
                console.log(token);
                // console.log(setItem('token', token));
                // navigate("/VendorMailVerification",{ state: { userData } });         
            }
            catch (err) {
                setError(err.message);
            }
          }
        setPage(value);
        }
        else{
            alert("Please Check Your Phone Number");
        } 
    }
    
    const handleInput = (e) => {
        const value = e.target.value;
        e.target.value = value.replace(/\D/g, '').slice(0, 6);
        setOtp(value);
      };
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await verifyPhOtp(phoneNo,otp);
            console.log(response);
            if (response.message === "OTP verified successfully") {
                navigate("/VendorMailVerification", { state: { userData } });
            }else if (response.message === "Invalid OTP"){
                alert("Invalid OTP");
            }else {
                alert(response.data.message);
            }
        } catch (err) {
            setError(err.message);
            console.error(err);
        }
      };
      
    return(
        <div className="login_signin_wrap">
            <div className="login_signin-body">
                <div className="loginPage-wrap">
                <div className="common-text">
                    <img src={logoImg} alt="" className="bodyLogo"/>
                    <p className="para">
                        Turning Dreams Into Unforgettable Moments. Your Seamless Event Experience Starts Here With
                    </p>
                    <p className="paraHighlight">
                        @Mangalam
                    </p>  
                </div>
                </div>
                <div className="form-wrap">
                    <form action="" method="post" enctype="application/x-www-form-urlencoded" className="login" onSubmit={handleSubmit}>
                    <p className="welcome-msg">Verification time!!!</p>
                    {(page === "phone") && (<>
                        <PhoneInput country={"in"} value={phoneNo} onChange={handlePhone} onKeyDown={handlePhoneKeyDown} buttonStyle={{border:"0px",height:"35px",backgroundColor:"transparent", marginTop:"4px"}} inputStyle={{border:"0px",width:"90%"}} containerStyle={{height:"39px", width:"90%",alignSelf:"center", border:"1px solid darkgrey",borderRadius:"10px",padding:"1px", marginBottom:"6%",marginTop: "20%"}} required/>
                        <button type="button" className="submit-btn signin-btn" onClick={()=>{handleRender("OTP")}}>Send OTP</button>
                    </>)}
                    {(page === "OTP") && (<>
                        <input type="text"  inputMode="numeric" maxLength={6} onInput={handleInput} placeholder="Enter OTP" className="login-field" style={{marginBottom:"6%",marginTop: "20%"}} required/>
                        <button type="submit" className="submit-btn">Submit</button>
                    </>)}
                    </form>
                </div>
            </div>
        </div>
    );
}