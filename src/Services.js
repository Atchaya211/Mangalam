import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Services(){
  // const location = useLocation();
  // const { data } = location.state || {}; 
  // console.log(data);
  return (
    <div className='services-bg'>
      <div className="services-body">
        <h1>Services Page</h1>
        <div className="serviceCont">
          <div className="service-center">
            <div className='inside-center'>
                <div className="service-link"><Link to='/DisplayVendors' className="service-text">Hall</Link></div>
                <div className="service-link"><Link to='/DisplayVendors' className="service-text">Hall Decoration</Link></div>
                <div className="service-link"><Link to='/DisplayVendors' className="service-text">Music</Link></div>
                <div className="service-link"><Link to='/DisplayVendors' className="service-text">Catering</Link></div>
            </div>

            <div className='inside-center'>
                <div className="service-link"><Link to='/DisplayVendors' className="service-text">Beautician</Link></div>
                <div className="service-link"><Link to='/DisplayVendors' className="service-text">Mascot</Link></div>
                <div className="service-link"><Link to='/DisplayVendors' className="service-text">Photographer</Link></div>
                <div className="service-link"><Link to='/DisplayVendors' className="service-text">Entertainment</Link></div>
            </div>
            
        </div>
        </div>
        <div className="corner-bg"></div>
        <div className="border-bg"></div>
      </div>
    </div>
  );
};