import React from 'react';
import "./style.css";
import { useUser } from "./UserContext";
export default function SubMenuProfile({onClose, handleUser}){
    const { setUser } = useUser();
    const handleLogin = () => {
        setUser(null); // Update the user state to null
        localStorage.removeItem('user'); // Clear the user data from localStorage
        console.log("User after logout:", localStorage.getItem('user'));
      };
    return(
        <div className="subMenu" onClick={onClose}>
        <div className="subMenu_Content" onClick={(e)=>{e.stopPropagation()}}>
            <div className="selfInfo">
                <div className="selfData">
                    <p className="name">Customer Name</p>
                    <p className="mail">Cust@gmail.com</p>
                </div>
                <div className='self_img'></div>
            </div>
            <a href="/MyAccountVendor" className='subMenu_Link' onClick={onClose} >MY ACCOUNT</a>
            <a href="/Help" className='subMenu_Link' onClick={onClose} >HELP</a>
            <a href="/" className='subMenu_Link' onClick={onClose} >SETTINGS</a>
            <a href="/" className='subMenu_Link' onClick={handleLogin} >LOGOUT</a>
        </div>
    </div>
    );
}