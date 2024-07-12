import React, {useState, useRef } from "react";
import "react-phone-input-2/lib/style.css";
import eye from "./images/eye-solid.svg";
import eyeClose  from "./images/eye-slash-solid.svg";
export default function EditProfileVendor(){
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeClose);
    const [password,setPassword] = useState("");
    const [name, setName] = useState("");
    const confmPass = useRef(null);
    
    const handleName = (event) =>{
        setName(event.target.value);
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
    
    const handlePassword =(event)=>{
        setPassword(event.target.value);
    };
    const validatePassword = () => {
        if (confmPass.current.value !== password) {
            alert("Please enter correct password in confirm password field!!");
            return false;
        }
        return true;
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        if (validatePassword()) {
            if(name){
                alert("all done!");
            }
        }
        else{
            alert("Please enter the same value in both password fields!!");
        }
    };
    return(
        <div className="editProfile-bg">
            <div className="editProfile-body">
                <form action="" method="post" enctype="application/x-www-form-urlencoded" className="login sign-in" onSubmit={handleSubmit}>
                <p className="welcome-msg">Updates time!!!</p>
                <input type="text" placeholder="Enter new Username" onChange={(event)=>{handleName(event)}} className="login-field"/>
                <div className="login-field password-wrap">
                    <input type={type} minLength={8} maxLength={8} id="password" placeholder="Enter Password" className="password-inp" onChange={(event)=>{handlePassword(event)}}/>
                    <button onClick={handleVisiblility} className="eye-icon-btn">
                        <img src={icon} alt="" className="eye-icon"/>
                    </button>
                </div>
                <div className="login-field password-wrap">
                    <input type={type} minLength={8} maxLength={8} id="confirm-password" ref={confmPass} placeholder="Confirm Password" className="password-inp"/>
                    <button onClick={handleVisiblility} className="eye-icon-btn">
                        <img src={icon} alt="" className="eye-icon"/>
                    </button>
                </div>
                <button type="submit" className="submit-btn signin-btn">Update</button>
            </form>
        </div>
    </div>
    );
}