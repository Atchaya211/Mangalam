import React from 'react';
import "./style.css";
import marraigeIcon from "./images/hindu_icon.png";
import haldiIcon from "./images/haldi_icon.png";
// import christIcon from "./images/christian_icon.png";
import cake from "./images/cake.png";
import engagementIcon from "./images/engagement.png";
import otherIcon from "./images/celebrations.png";
import ProposalIcon from "./images/proposals.png";
import babyShowerIcon from "./images/baby_shower.png";
import corporateIcon from "./images/corporate.png";
import hinduImg from "./images/hindu_image.jpg";
import christianImg from "./images/christian_image.jpg";
import corporateImg from "./images/corporate_image.jpg";
import bdayImg1 from "./images/birthday_image.jpg";
import bdayImg2 from "./images/bday_image.jpg";
import porposalImg from "./images/proposal_image.jpg";
import { useNavigate } from 'react-router-dom';

export default function Home(){
    const navigate = useNavigate();
    // const [eventType, setEventType ] = useState("HIII");
    const handleNavigation = (type) => {
        navigate('/services', { state: {  data: type } });
    };
    return(
        <div className="home">
            <div className="home_body">
            <div className="home_text">
                <div className="common-text">
                    <div className='home_text_wrap'>
                        <p className="home_para">
                            Turning Dreams Into Unforgettable Moments. Your Seamless Event Experience Starts Here With
                        </p>
                        <p className="paraHighlight">
                            @Mangalam
                        </p>
                    </div>
                    <div className="events_link">
                        <a href='/Services' className="events_icon">
                            <img src={marraigeIcon} alt="" className='events_img' onClick={(e)=>{
                                e.preventDefault();
                                handleNavigation("Marraige");
                            }}/>
                            <p className="event">Marraige</p>
                        </a>
                        <a href='/Services' className="events_icon" onClick={(e)=>{
                            e.preventDefault();
                            handleNavigation("Haldi");
                        }}>
                            <img src={haldiIcon} alt="" className='events_img'/>
                            <p className="event">Haldi</p>
                        </a>
                        <a href='/Services' className="events_icon">
                            <img src={engagementIcon} alt="" className='events_img' onClick={(e)=>{
                                e.preventDefault();
                                handleNavigation("Engagements");
                            }}/>
                            <p className="event">Engagements</p>
                        </a>
                        <a href='/Services' className="events_icon">
                            <img src={corporateIcon} alt="" className='events_img' onClick={(e)=>{
                                e.preventDefault();
                                handleNavigation("Corporate Event");
                            }}/>
                            <p className="event">Corporate Event</p>
                        </a>
                        <a href='/Services' className="events_icon" onClick={(e)=>{
                            e.preventDefault();
                            handleNavigation("Birthdays");
                        }}>
                            <img src={cake} alt="" className='events_img'/>
                            <p className="event">Birthdays</p>
                        </a>
                        <a href='/Services' className="events_icon" onClick={(e)=>{
                            e.preventDefault();
                            handleNavigation("Baby Shower");
                        }}>
                            <img src={babyShowerIcon} alt="" className='events_img'/>
                            <p className="event">Baby Shower</p>
                        </a>
                        <a href='/Services' className="events_icon" onClick={(e)=>{
                            e.preventDefault();
                            handleNavigation("Proposals");
                        }}>
                            <img src={ProposalIcon} alt="" className='events_img'/>
                            <p className="event">Proposals</p>
                        </a>
                        <a href='/Services' className="events_icon" onClick={(e)=>{
                            e.preventDefault();
                            handleNavigation("Other Celebrations");
                        }}>
                            <img src={otherIcon} alt="" className='events_img'/>
                            <p className="event">Other Celebrations</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="home_images">
                <div className='home-img-wrap'>
                    <img src={hinduImg} alt="" className='home-img hori_img' />
                    <img src={christianImg} alt=""  className='home-img'/>
                </div>
                <div className='home-img-wrap'>
                    <img src={bdayImg1} alt=""  className='home-img'/>
                    <img src={bdayImg2} alt=""  className='home-img'/>
                    <img src={porposalImg} alt=""  className='home-img'/>
                </div>
                <div className='home-img-wrap'>
                    <img src={corporateImg} alt=""  className='home-img hori_img' style={{marginLeft:"10%"}}/>
                    
                </div>
            </div>
            </div>
        </div>
    );
}