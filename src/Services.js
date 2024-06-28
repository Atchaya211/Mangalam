// venue, catering, music, video, dacoration, entertainment, beautitian, mascot
import React from 'react';
import { useLocation } from 'react-router-dom';
const Services = () => {
  const location = useLocation();
  const { data } = location.state || {}; 

  return (
    <div className='services-bg'>
      <div className="services-body">
        <h1>Services Page</h1>
        <div className="serviceCont"></div>
        {(data==="Hindu Marraige" || data==="Christian Marraige" || data==="Engagements" || data==="Baby Shower" || data==="Other Celebrations") && (<div className="service-center">
            <div className='inside-center'>
                <div className="service-link"><a href='/' className="service-text">Hall</a></div>
                <div className="service-link"><a href='/' className="service-text">Music</a></div>
                <div className="service-link"><a href='/' className="service-text">Catering</a></div>
                <div className="service-link"><a href='/' className="service-text">Beautician</a></div>
            </div>

            <div className='inside-center'>
                <div className="service-link"><a href='/' className="service-text">Mascot</a></div>
                <div className="service-link"><a href='/' className="service-text">Photographer</a></div>
                <div className="service-link"><a href='/' className="service-text">Hall Decoration</a></div>
                <div className="service-link"><a href='/' className="service-text">Entertainment</a></div>
            </div>
            
        </div>)}
        {(data==="Birthdays" || data==="Corporate Event" || data==="Proposals") && (<div className="service-center">
            <div className='inside-center'>
                <div className="service-link"><a href='/' className="service-text">Hall</a></div>
                <div className="service-link"><a href='/' className="service-text">Hall Decoration</a></div>
                <div className="service-link"><a href='/' className="service-text">Catering</a></div>
                <div className="service-link"><a href='/' className="service-text">Music</a></div>
            </div>
            <div className='inside-center'>
                <div className="service-link"><a href='/' className="service-text">Mascot</a></div>
                <div className="service-link"><a href='/' className="service-text">Photographer</a></div>
                <div className="service-link"><a href='/' className="service-text">Entertainment</a></div>
            </div>
        </div>)}
        <div className="corner-bg"></div>
        <div className="border-bg"></div>
      </div>
    </div>
  );
};

export default Services;
