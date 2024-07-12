import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";
import "./style.css";
import eye from "./images/eye-solid.svg";
import eyeClose  from "./images/eye-slash-solid.svg";
import logoImg from "./images/logo.png";
import SignInPage from "./SignInPage";
import ForgetPassword from "./ForgetPassword";
export default function LoginPage(){
    const { setUser } = useUser();
    const navigate = useNavigate();

    const [isValidEmail, setIsValidEmail] = useState(true);
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeClose);
    const [ show, setShow ] = useState("Login");
    const handleForm = (value) => {
        console.log(value);
        setShow(value);
    }
    const handleEmail = (event) => {
        const regexp = /^[a-zA-Z0-9]+[^!#$%&~]*@gmail\.(com|in|org)$/;
        const value = event.target.value;
        if(regexp.test(value)){
            setIsValidEmail(true);
        }
        else{
            setIsValidEmail(false);
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
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
    }

    const handleLogin = () => {
        const loggedInUser = {
          role: "customer"
        };
        setUser(loggedInUser);
        navigate("/");
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
        {(show ==="Login") && (<div className="form-wrap">
            <form action="" method="post" enctype="application/x-www-form-urlencoded" className="login" onSubmit={handleSubmit}>
                <p className="welcome-msg">Welcome Back!!!</p>
                <input type="email" placeholder="Enter Email" onChange={(event)=>{handleEmail(event);}} className="login-field" required/><br />
                {!isValidEmail && <p className={!isValidEmail ?"err":"noerr"}>Please enter a valid email address.</p>}
                <div className="login-field password-wrap">
                    <input type={type} minLength={8} maxLength={8} placeholder="Enter Password" className="password-inp" required/>
                    <button onClick={handleVisiblility} className="eye-icon-btn">
                        <img src={icon} alt="" className="eye-icon"/>
                    </button>
                </div><br/>
                <button type="submit" className="submit-btn" onClick={handleLogin}>Submit</button>
                <button className="signUp-link fpass" onClick={()=>{handleForm("PasswordReset")}}>Forget Password?</button>
            </form>
            <button className="signUp-link" onClick={()=>{handleForm("Signin")}}>Click here to SignUp</button>
        </div>)}
        {(show === "Signin") && (<div className="form-wrap">
        <SignInPage/>
        <button className="signUp-link" onClick={()=>{handleForm("Login")}}>Click here to LogIn</button>
        </div>)}
        
        {(show === "PasswordReset") && (<div className="form-wrap">
        <ForgetPassword/>
        <button className="signUp-link" onClick={()=>{handleForm("Login")}}>Click here to LogIn</button>
        </div>)}
        </div>
        </div>
    );
}
