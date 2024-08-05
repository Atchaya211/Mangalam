import React from 'react';
import "./style.css";
import marraigeIcon from "./images/hindu_icon.png";
import haldiIcon from "./images/haldi_icon.png";
import { useUser } from "./UserContext";
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
import '@fortawesome/fontawesome-free/css/all.min.css';
// import { useNavigate } from 'react-router-dom';

export default function Home(){
    const { user, setUser } = useUser();
    return(
        <div className="home">
            <div className="home_body">
            <div className="home_text">
                <div className="common-text">
                    <div className="search">
                        <button className='search-btn'><i className="fa fa-search" aria-hidden="true"></i></button>
                        <input type="text" className='search-text'/>
                    </div>
                    <div className='home_text_wrap'>
                        <p className="home_para">
                            Turning Dreams Into Unforgettable Moments. Your Seamless Event Experience Starts Here With
                        </p>
                        <p className="paraHighlight">
                            @Mangalam
                        </p>
                    </div>
                    <div className='home-left-btm'>
                    { user ? (<div className="events_link">
                        <a href='/Services' className="events_icon">
                            <img src={marraigeIcon} alt="" className='events_img'/>
                            <p className="event">Marraige</p>
                        </a>
                        <a href='/Services' className="events_icon">
                            <img src={haldiIcon} alt="" className='events_img'/>
                            <p className="event">Haldi</p>
                        </a>
                        <a href='/Services' className="events_icon">
                            <img src={engagementIcon} alt="" className='events_img'/>
                            <p className="event">Engagements</p>
                        </a>
                        <a href='/Services' className="events_icon">
                            <img src={corporateIcon} alt="" className='events_img'/>
                            <p className="event">Corporate Event</p>
                        </a>
                        <a href='/Services' className="events_icon">
                            <img src={cake} alt="" className='events_img'/>
                            <p className="event">Birthdays</p>
                        </a>
                        <a href='/Services' className="events_icon">
                            <img src={babyShowerIcon} alt="" className='events_img'/>
                            <p className="event">Baby Shower</p>
                        </a>
                        <a href='/Services' className="events_icon">
                            <img src={ProposalIcon} alt="" className='events_img'/>
                            <p className="event">Proposals</p>
                        </a>
                        <a href='/Services' className="events_icon">
                            <img src={otherIcon} alt="" className='events_img'/>
                            <p className="event">Other Celebrations</p>
                        </a>
                    </div>):(
                        <div className="events_link">
                        <a href='/LoginPage' className="events_icon">
                            <img src={marraigeIcon} alt="" className='events_img'/>
                            <p className="event">Marraige</p>
                        </a>
                        <a href='/LoginPage' className="events_icon">
                            <img src={haldiIcon} alt="" className='events_img'/>
                            <p className="event">Haldi</p>
                        </a>
                        <a href='/LoginPage' className="events_icon">
                            <img src={engagementIcon} alt="" className='events_img'/>
                            <p className="event">Engagements</p>
                        </a>
                        <a href='/LoginPage' className="events_icon">
                            <img src={corporateIcon} alt="" className='events_img'/>
                            <p className="event">Corporate Event</p>
                        </a>
                        <a href='/LoginPage' className="events_icon">
                            <img src={cake} alt="" className='events_img'/>
                            <p className="event">Birthdays</p>
                        </a>
                        <a href='/LoginPage' className="events_icon">
                            <img src={babyShowerIcon} alt="" className='events_img'/>
                            <p className="event">Baby Shower</p>
                        </a>
                        <a href='/LoginPage' className="events_icon">
                            <img src={ProposalIcon} alt="" className='events_img'/>
                            <p className="event">Proposals</p>
                        </a>
                        <a href='/LoginPage' className="events_icon">
                            <img src={otherIcon} alt="" className='events_img'/>
                            <p className="event">Other Celebrations</p>
                        </a>
                    </div>
                    )}
                    <div className="pic"></div>
                    </div>
                </div>
            </div>
            <div className="home_images">
                <div className="loc">
                    <input type="text" className='loc-text' placeholder='Delhi'/>
                    <i className="fa fa-location-dot"></i>
                </div>
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