import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className='services-bg'>
      <div className="services-body">
        <h1>Services Page</h1>
        <div className="serviceCont">
          <div className="service-center">
            <div className='inside-center'>
              <div className="service-link">
                <Link to="/DisplayVendors" state={{ service: 'Venue booking' }} className="service-text">
                  Venue booking
                </Link>
              </div>
              <div className="service-link">
                <Link to="/DisplayVendors" state={{ service: 'theme & decor' }} className="service-text">
                  theme & decor
                </Link>
              </div>
              <div className="service-link">
                <Link to="/DisplayVendors" state={{ service: 'Mehndi artist' }} className="service-text">
                  Mehndi artist
                </Link>
              </div>
              <div className="service-link">
                <Link to="/DisplayVendors" state={{ service: 'Food & Catering' }} className="service-text">
                  Food & Catering
                </Link>
              </div>
              <div className="service-link">
                <Link to="/DisplayVendors" state={{ service: 'event organizer' }} className="service-text">
                  event organizer
                </Link>
              </div>
            </div>
            <div className='inside-center'>
              <div className="service-link">
                <Link to="/DisplayVendors" state={{ service: 'Beauty Artisan' }} className="service-text">
                  Beauty Artisan
                </Link>
              </div>
              <div className="service-link">
                <Link to="/DisplayVendors" state={{ service: 'Transportation' }} className="service-text">
                  Transportation
                </Link>
              </div>
              <div className="service-link">
                <Link to="/DisplayVendors" state={{ service: 'Digital services' }} className="service-text">
                  Digital services
                </Link>
              </div>
              <div className="service-link">
                <Link to="/DisplayVendors" state={{ service: 'Entertainment' }} className="service-text">
                  Entertainment
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="corner-bg"></div>
        <div className="border-bg"></div>
      </div>
    </div>
  );
}
