import React, {useState,useEffect} from "react";
import PhoneInput from "react-phone-input-2";
import "./style.css";
export default function ForgetPassword(){
    const [ phoneNo, setPhoneNo] = useState(0);
    const [countryCodeLength, setCountryCodeLength] = useState(0);
    const [otp, setOtp] = useState(0);
    const [enteredOtp, setEnteredOtp] = useState(0);
    const [showChangePass, setShowChangePass] = useState(false);
    useEffect(()=>{
        const randNo = Math.floor(1000+Math.random()*9000);
        setOtp(randNo);
        console.log(randNo);
    },[]);
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
    };
    const handleOtp = (event)=>{
        setEnteredOtp(parseInt(event.target.value));
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(otp === enteredOtp){
            alert("matched!!");
            setShowChangePass(true);
        }
        else{
            alert("not matched");
        }
    }
    return(
        <>    
            {!showChangePass && (
                <form className="login" onSubmit={handleSubmit}>
                    <p className="welcome-msg">Verification time!!!</p>
                    <PhoneInput country={"in"} value={phoneNo} onChange={handlePhone} onKeyDown={handlePhoneKeyDown} buttonStyle={{border:"0px",height:"35px",backgroundColor:"transparent", marginTop:"4px"}} inputStyle={{border:"0px",width:"90%"}} containerStyle={{height:"39px", width:"90%",alignSelf:"center", border:"1px solid darkgrey",borderRadius:"10px",padding:"1px",margin: "4%"}} required/>
                    <input type="text" placeholder="Enter OTP"  className="login-field" onChange={(event)=>{handleOtp(event)}} required/>
                    <button type="submit" className="submit-btn signin-btn">Verify</button>
                </form>)}
            {showChangePass && (
                <form className="login">
                    <p className="welcome-msg">Set New Password</p>
                    <input type="text" placeholder="Enter New Password" className="login-field" required/>
                    <input type="text" placeholder="Confirm New Password" className="login-field" required/>
                    <button type="submit" className="submit-btn signin-btn">Submit</button>
                </form>
            )}
        </>
    );
}