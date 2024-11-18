import React from "react";
import './footer.css'
import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBlog } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
//import logo from './infy logo (3).png'

export default function Footer() {

  return (
    <>

      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-4 col-lg-4 col-xs-12 ">
              <h6>LOCATE US</h6>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.001174057548!2d76.9340001140241!3d11.11328989209345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f692198af0c1%3A0x6c9fb0f45e707a3a!2sPACIFIC+ELECTRO+SOLUTIONS!5e0!3m2!1sen!2sin!4v1531470801450"
                frameborder="0" allowfullscreen className="img-fluid"></iframe>
            </div>
            <div class="col-xs-6 col-md-3">
              <h6>Support</h6>
              <ul class="footer-links">
                <li>About us</li>
                <li>Our business </li>
                <li> Product</li>
                <li> Solution</li>
                <li>Contact us</li>
              </ul>
            </div>
               <div class="col-xs-6 col-md-3">
              <h6>our Company</h6>
              <ul class="footer-links">
                <li>Privacy</li>
                <li>Security</li>
                <li>Terms</li>
                <li>Warranty</li>
              </ul>
            </div>
            <div class="col-xs-6 col-md-2 col-lg-2 ">
              <h6>Social</h6>
              <ul class="social-icons">
                <li className="iconsocialfooter"> <FontAwesomeIcon icon={faBlog} /></li>
                <li className="iconsocialfooter"> <FontAwesomeIcon icon={faWhatsapp} /></li>
                <li className="iconsocialfooter"> <FontAwesomeIcon icon={faFacebook} /></li>
                <li className="iconsocialfooter"> <FontAwesomeIcon icon={faInstagram} /></li>
                <li className="iconsocialfooter"> <FontAwesomeIcon icon={faXTwitter} /></li>
                <li className="iconsocialfooter"> <FontAwesomeIcon icon={faTwitter} /></li>
                <li className="iconsocialfooter"> <FontAwesomeIcon icon={faYoutube} /></li>
                <li className="iconsocialfooter"> <FontAwesomeIcon icon={faEnvelope} /></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <p class="copyright-text text-center">Copyright &copy; 2024   ADHIBA TECHNOLOGIES PRIVATE LIMITED
                <a href="#"></a>
              </p>
            </div>
          </div>
        </div>
      </footer>

    </>

  )
}