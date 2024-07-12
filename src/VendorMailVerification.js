import React, {useState} from "react";
import "./style.css";
import logoImg from "./images/logo.png";

export default function VendorVerification(){
    const [mailId, setMailId] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [page, setPage] = useState("mail");
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
    const handleRender = (value) =>{
        if(isValidEmail){
        setPage(value);
        }
        else{
            alert(mailId + "  Please check mail id!!!");
        }
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
                    {(page === "mail") && (<>
                        <input type="email" placeholder="Enter Email" onChange={(event)=>{handleEmail(event);}} className="login-field" required/><br />
                        {!isValidEmail && <p className={!isValidEmail ?"err":"noerr"}>Please enter a valid email address.</p>}
                        <button type="button" className="submit-btn signin-btn" onClick={()=>{handleRender("OTP")}}>Send OTP</button>
                    </>)}
                    {(page === "OTP") && (<>
                        <input type="text"  inputMode="numeric" maxLength={4} onInput={handleInput} placeholder="Enter OTP" className="login-field" style={{marginBottom:"6%",marginTop: "20%"}} required/>
                        <button type="submit" className="submit-btn"><a href="/VendorBgCheck" style={{color:"white", textDecoration:"none"}}>Submit</a></button>
                    </>)}
                    </form>
                </div>
            </div>
        </div>
    );
}