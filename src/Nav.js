import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./style.css";
import Logo from "./images/logo.png";
import SubMenuProfile from "./SubMenuProfile";
import SubMenuProfileVendor from "./SubMenuProfileVendor";
import SubMenuLogin from "./SubMenuLogin";
import { useUser } from "./UserContext";
export default function Nav()
{
    const [isHidden, setIsHidden] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showProfile, setshowProfile] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const { user, setUser } = useUser();
    
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setScreenSize(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
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
            {user ? (<>
                {user.role === "vendor" ? (<div className={isHidden?"wrap":"link-wrap"} onClick={handleScreen}>
                <Link to="/" className="other-page" onClick={handle}>Home</Link>
                <Link to="/About" className="other-page" onClick={handle}>About</Link>
                <Link className="other-page" onClick={showProfileMenu}>Profile</Link>
                    {showProfile && (
                        <SubMenuProfileVendor onClose={hideProfileMenu}/>
                    )}
                    {/* <button onClick={handleLogout}>Logout</button> */}
                </div>
                ):(
                    <div className={isHidden?"wrap":"link-wrap"} onClick={handleScreen}>
                        <Link to="/" className="other-page" onClick={handle}>Home</Link>
                        <Link to="/About" className="other-page" onClick={handle}>About</Link>
                        <Link to="/Services" className="other-page" onClick={handle}>Services</Link>
                        <Link to="/MyActivity" className="other-page" onClick={handle}>Activities</Link>
                        <Link className="other-page" onClick={showProfileMenu}>Profile</Link>
                        {showProfile && (
                            <SubMenuProfile onClose={hideProfileMenu}/>
                        )}
                    {/* <button onClick={handleLogout}>Logout</button> */}

                </div>)}</>
            ):(
                <div className={isHidden?"wrap":"link-wrap"} onClick={handleScreen}>
                    <Link className="other-page" onClick={showLoginMenu}>Login/SignIn</Link>
                    {showLogin && (
                        <SubMenuLogin onClose={hideLoginMenu}/>
                    )}
                </div>
            )}
            <button className="menu-icon"
            onClick={handle}>
                {isHidden ?<i className="fas fa-times"></i>:<i className="fas fa-bars"></i>}
            </button>
        </div>
    );
}
