import React from 'react';
import { Link } from 'react-router-dom';
// import pic1 from "./images/marraige-hall-decor.jpg";
import Venue from "./images/Venue_Booking.png";
import theme from "./images/Theme_Decor.png";
import Mehndi from "./images/Mehndi_Artist.png";
import Food from "./images/Food_Catering.png";
import Beauty from "./images/Beauty_Artisan.png";
import event from "./images/Event_Organizer.png";
import Transportation from "./images/Transportation.png";
import Digital from "./images/Digital_Services.png";
import Entertainment from "./images/Entertainment.png";
import Packages from "./images/Packages.png";
export default function Services() {
  return (
    <div className='services-bg'>
      <div className="services-body">
      <div className="service-top">
        <div className="search-service-l">
          <div className="search">
            <button className='search-btn'><i className="fa fa-search" aria-hidden="true"></i></button>
            <input type="text" className='search-text'/>
          </div>
        </div>
        <div className="search-service-r">
        <div className="loc">
            <input type="text" className='loc-text' placeholder='Delhi'/>
            <i className="fa fa-location-dot"></i>
          </div>
        </div>
      </div>
          <div className="service-center">
              <div className="service-link">
                <img src={Venue} alt=""className="service-img"/>
                <Link to="/DisplayVendors" state={{ service: 'Venue booking' }} className="service-text">
                  Venue booking
                </Link>
              </div>
              <div className="service-link">
                <img src={theme} alt=""className="service-img"/>
                <Link to="/DisplayVendors" state={{ service: 'theme & decor' }} className="service-text">
                  Theme & Decor
                </Link>
              </div>
              <div className="service-link">
                <img src={Mehndi} alt=""className="service-img"/>
                <Link to="/DisplayVendors" state={{ service: 'Mehndi artist' }} className="service-text">
                  Mehndi Artist
                </Link>
              </div>
              <div className="service-link">
                <img src={Food} alt=""className="service-img"/>
                <Link to="/DisplayVendors" state={{ service: 'Food & Catering' }} className="service-text">
                  Food & Catering
                </Link>
              </div>
              <div className="service-link">
                <img src={event} alt=""className="service-img"/>
                <Link to="/DisplayVendors" state={{ service: 'event organizer' }} className="service-text">
                  Event Organizer
                </Link>
              </div>
              <div className="service-link">
                <img src={Beauty} alt=""className="service-img"/>
                <Link to="/DisplayVendors" state={{ service: 'Beauty Artisan' }} className="service-text">
                  Beauty Artisan
                </Link>
              </div>
              <div className="service-link">
                <img src={Transportation} alt=""className="service-img"/>
                <Link to="/DisplayVendors" state={{ service: 'Transportation' }} className="service-text">
                  Transportation
                </Link>
              </div>
              <div className="service-link">
                <img src={Digital} alt=""className="service-img"/>
                <Link to="/DisplayVendors" state={{ service: 'Digital services' }} className="service-text">
                  Digital services
                </Link>
              </div>
              <div className="service-link">
                <img src={Entertainment} alt=""className="service-img"/>
                <Link to="/DisplayVendors" state={{ service: 'Entertainment' }} className="service-text">
                  Entertainment
                </Link>
              </div>
              <div className="service-link">
                <img src={Packages} alt=""className="service-img"/>
                <Link to="/DisplayVendors" state={{ service: 'Packages' }} className="service-text">
                  Packages
                </Link>
              </div>
            </div>
      </div>
    </div>
  );
}
