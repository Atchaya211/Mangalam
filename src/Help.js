import React, {useState} from "react";
import pic1 from "./images/myAccount.png";
export default function Help(){
    const [textareaVal, setTextareaVal] = useState("");
    const handleTextarea= (event)=>{
        setTextareaVal(event.target.value);
    };
    return(
        <>
           <div className="booking_bg">
                <p className="booking_heading">HAPPY TO HELP YOU!!!</p>
                <div className="booking">
                    <div className="booking_wrap help">
                        <div className="help-img"></div>
                        <div className="help-details">
                            <textarea id="address" value={textareaVal} onChange={handleTextarea} rows={6} cols={10} placeholder="Enter your query...." className="addTextarea" required></textarea>
                            <button className="book-btn" style={{alignSelf:"center"}}>Send</button>
                        </div>
                    </div>
                </div>
                <img src={pic1} alt="" className="MyAccPic helpPic" />
           </div> 
        </>
    );
}