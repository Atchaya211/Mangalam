import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./style.css";
import Logo from "./images/logo.png";
import SubMenuProfile from "./SubMenuProfile";
import SubMenuLogin from "./SubMenuLogin";
export default function Nav()
{
    const [isHidden, setIsHidden] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showProfile, setshowProfile] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const [screenSize, setScreenSize] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setScreenSize(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        // Clean up listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures useEffect runs only once on component mount
    const handleScreen = () =>{
        if(screenSize >= 768){
            setIsHidden(false)
        }
    }

    const handle = () =>{
        setIsHidden(!isHidden);
        setIsExpanded(!isExpanded);
    }
    const showLoginMenu = () =>{
        setShowLogin(true);
    }
    const hideLoginMenu = ()=>{
        setShowLogin(false);
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
            <div className={isHidden?"wrap":"link-wrap"} onClick={handleScreen}>
                <Link to="/" className="other-page" onClick={handle}>Home</Link>
                <Link to="/About" className="other-page" onClick={handle}>About</Link>
                <Link className="other-page hideOnMobile" onClick={showLoginMenu}>Login/SignIn</Link>
                {showLogin && (
                    <SubMenuLogin onClose={hideLoginMenu}/>
                )}
                <Link className="other-page" onClick={showProfileMenu}>Profile</Link>
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