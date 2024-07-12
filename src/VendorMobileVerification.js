import React, {useState} from "react";
import "./style.css";
import logoImg from "./images/logo.png";
import PhoneInput from "react-phone-input-2";

export default function VendorVerification(){
    const [ phoneNo, setPhoneNo] = useState(0);
    const [countryCodeLength, setCountryCodeLength] = useState(0);
    const [page, setPage] = useState("phone");
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
    const handleRender = (value) =>{
        setPage(value);
    }
    const handleInput = (e) => {
        const value = e.target.value;
        e.target.value = value.replace(/\D/g, '').slice(0, 4);
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
                    <form action="" method="post" enctype="application/x-www-form-urlencoded" className="login">
                    <p className="welcome-msg">Verification time!!!</p>
                    {(page === "phone") && (<>
                        <PhoneInput country={"in"} value={phoneNo} onChange={handlePhone} onKeyDown={handlePhoneKeyDown} buttonStyle={{border:"0px",height:"35px",backgroundColor:"transparent", marginTop:"4px"}} inputStyle={{border:"0px",width:"90%"}} containerStyle={{height:"39px", width:"90%",alignSelf:"center", border:"1px solid darkgrey",borderRadius:"10px",padding:"1px", marginBottom:"6%",marginTop: "20%"}} required/>
                        <button type="button" className="submit-btn signin-btn" onClick={()=>{handleRender("OTP")}}>Send OTP</button>
                    </>)}
                    {(page === "OTP") && (<>
                        <input type="text"  inputMode="numeric" maxLength={4} onInput={handleInput} placeholder="Enter OTP" className="login-field" style={{marginBottom:"6%",marginTop: "20%"}} required/>
                        <button type="submit" className="submit-btn"><a href="/VendorMailVerification" style={{color:"white", textDecoration:"none"}}>Submit</a></button>
                    </>)}
                    </form>
                </div>
            </div>
        </div>
    );
}