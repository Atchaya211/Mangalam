import React from 'react';
import "./style.css";
export default function SubMenuProfile({onClose}){
    return(
        <div className="subMenu hideOnMobile" onClick={onClose}>
        <div className="subMenu_Content" onClick={(e)=>{e.stopPropagation()}}>
            <div className="selfInfo">
                <div className="selfData">
                    <p className="name">Customer Name</p>
                    <p className="mail">Cust@gmail.com</p>
                </div>
                <div className='self_img'></div>
            </div>
            <a href="/MyAccount" className='subMenu_Link' onClick={onClose} >MY ACCOUNT</a>
            <a href="/MyActivity" className='subMenu_Link' onClick={onClose} >BOOKINGS</a>
            <a href="/Help" className='subMenu_Link' onClick={onClose} >HELP</a>
            <a href="/" className='subMenu_Link' onClick={onClose} >SETTINGS</a>
            <a href="/" className='subMenu_Link' onClick={onClose} >LOGOUT</a>
        </div>
    </div>
    );
}