import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./style.css";
import Logo from "./images/logo.png";
import SubMenuProfile from "./SubMenuProfile";
export default function Nav()
{
    const [isHidden, setIsHidden] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showProfile, setshowProfile] = useState(false);
    const handle = () =>{
        setIsHidden(!isHidden);
        setIsExpanded(!isExpanded);
    }
    const showProfileMenu = () =>{
        setshowProfile(true);
    }
    const hideProfileMenu=()=>{
        setshowProfile(false);
    }
    return(
         
        <div className={isExpanded?"Navigate nav":"Navigate"}>
            <img src={Logo} alt="mangalam" className="logo"/>
            <div className={isHidden?"wrap":"link-wrap"} onClick={()=> setIsHidden(false)}>
                <Link to="/" className="other-page" onClick={handle}>Home</Link>
                <Link to="/About" className="other-page" onClick={handle}>About</Link>
                <Link to="/LoginPage" className="other-page" onClick={handle}>Login/SignIn</Link>
                <Link className="other-page hideOnMobile" onClick={showProfileMenu}>Profile</Link>
                {showProfile && (
                    <SubMenuProfile onClose={hideProfileMenu}/>
                )}
            </div>
            <button className="menu-icon"
            onClick={handle}>
                {isHidden ?<i className="fas fa-times"></i>:<i className="fas fa-bars"></i>}
            </button>
        </div>
    );
}