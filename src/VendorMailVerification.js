import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {registerVendor} from './api';
import { useLocation } from 'react-router-dom';
import { emailOtp, verifyMailOtp } from './api';
import "./style.css";
import logoImg from "./images/logo.png";

export default function VendorVerification(){
    // useEffect(()=>{
    //     console.log(userData);
    // });
    const location = useLocation();
    const userData = location.state.userData;
    const navigate = useNavigate();
    const [mailId, setMailId] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [page, setPage] = useState("mail");
    const [otp, setOtp] = useState("");
    // const [generatedOtp, setGeneratedOtp] = useState("")
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
    }
    const handleRender = async (value) =>{
        if(isValidEmail && mailId===userData.email_id){
            const token = await emailOtp(mailId);
            console.log(token);
            setPage(value);
        }
        else{
            alert(mailId + "  Please check mail id!!!");
        }
    }
    const handleInput = (e) => {
        const value = e.target.value;
        e.target.value = value.replace(/\D/g, '').slice(0, 6);
        setOtp(value);
      };
      const handleSubmit = async (event) => {
        event.preventDefault();
        // Validate OTP entered by the user
        try {
            const response = await verifyMailOtp(mailId,otp);
            // console.log(response);
            if (response.message === "OTP verified successfully") {
                navigate("/VendorBgCheck", { state: { userData } });
                try {
                    const response = await registerVendor(userData);
                    console.log(response);
                    alert("Registration successful!");
                    navigate("/VendorBgCheck");
                } catch (error) {
                    alert(error);
                }
            //   console.log("OTP verified successfully");
            }else if (response.message === "Invalid OTP"){
                alert("Invalid OTP");
            }else {
                alert(response.data.message);
            }

        } catch (err) {
            // setError(err.message);
            console.error(err);
        }
    
    }
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
                    {(page === "mail") && (<>
                        <input type="email" placeholder="Enter Email" onChange={(event)=>{handleEmail(event);}} className="login-field" required/><br />
                        {!isValidEmail && <p className={!isValidEmail ?"err":"noerr"}>Please enter a valid email address.</p>}
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