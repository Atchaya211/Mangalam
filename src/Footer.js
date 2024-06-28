import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faWhatsapp,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
export default function Footer(){
    return(
        <div className="footer">
          <div className="media-icon">
          <p className="copyright">
              <i className="fa-regular fa-copyright copyright-icon"></i>
              <p className="copyright-text">
                Copyright 2024 Mangalam Co. All Rights Reserved.
              </p>
          </p>
          <button className="social"><FontAwesomeIcon icon={faEnvelope} size="2x" className="social-media" /></button>
          <button className="social"><FontAwesomeIcon icon={faPhone} size="2x" className="social-media"/></button>
          <button className="social"><FontAwesomeIcon icon={faWhatsapp} size="2x" className="social-media"/></button>
          <button className="social"><FontAwesomeIcon icon={faFacebook} size="2x" className="social-media"/></button>
          <button className="social"><FontAwesomeIcon icon={faInstagram} size="2x" className="social-media" /></button>
          <button className="social"><FontAwesomeIcon icon={faYoutube} size="2x" className="social-media" /></button>
          <button className="social"><FontAwesomeIcon icon={faTwitter} size="2x" className="social-media"/></button>
          </div>
        </div>
    );
}