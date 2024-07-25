import React, {useState, useRef } from "react";
import "./style.css";
import {registerUser} from './api';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import eye from "./images/eye-solid.svg";
import eyeClose  from "./images/eye-slash-solid.svg";

export default function SignInPage(){
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidName, setIsValidName] = useState(true);
    const [isValidPhno, setIsValidPhno] = useState(true);
    const [name, setName ] = useState("");
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
        const regexp = /^[A-Za-z]+$/;
        const value = event.target.value;
        if(regexp.test(value)){
            setIsValidName(true);
            setName(value);
        }
        else{
            setIsValidName(false);
        }
    };
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
    // const handleImageChange =(event)=>{
    //     setSelectedImg(event.target.files[0]);
    // };
    const handleTextarea= (event)=>{
        setTextareaVal(event.target.value);
    };
    const handleSubmit= async (event)=>{
        event.preventDefault();
        if(textareaVal){
            console.log(name);
            console.log(mailId);
            console.log(phoneNo);
            console.log(textareaVal);
            console.log(password);
            const userData = {
                "name": name,
                "email_id": mailId,
                "phone_no": phoneNo,
                "full_address": textareaVal,
                "pincode":"12356",
                "password": password
            };
            try {
                const response = await registerUser(userData);
                console.log(response);
                alert("Registration successful!");
            } catch (error) {
                alert(error);
            }
        }
    };
    return(
        <form action="" method="post" enctype="multipart/form-data" className="login sign-in" onSubmit={handleSubmit}>
        <p className="welcome-msg">Hey! Let's Get Started</p>
        {!showNextPg && (<><input type="text" placeholder="Enter name" onChange={(event)=>{handleName(event);}} className="login-field" required/>
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
            <textarea id="address" value={textareaVal} onChange={handleTextarea} rows={6} cols={10} placeholder="Enter your address" className="addTextarea" required></textarea>
            {/* <div className="imgUpdload">
                <label htmlFor="imgUpload">Upload your profile Picture</label>
                <input type="file" id="imgUpload" accept="image/*" onChange={handleImageChange} className="imgUploadBtn" required />
            </div> */}
            <button type="submit" className="submit-btn signin-btn">Submit</button>
        </>)}
    </form>
    );
}