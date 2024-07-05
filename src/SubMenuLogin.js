import React from 'react';
import "./style.css";
export default function SubMenuLogin({onClose}){
    return(
        <div className="subMenu" onClick={onClose}>
        <div className="subMenu_Content_login" onClick={(e)=>{e.stopPropagation()}}>
            <a href="/LoginPage" className='subMenu_Link' onClick={onClose} >Customer Log-in</a>
            <a href="/VendorLoginPage" className='subMenu_Link' onClick={onClose} >Vendor Log-in</a>
        </div>
    </div>
    );
}