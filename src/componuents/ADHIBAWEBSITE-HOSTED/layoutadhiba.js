
import React from "react";
import './styleintro.css'
import { Outlet, Link } from "react-router-dom";
import adhibalogo from '../ADHIBAWEBSITE-HOSTED/font/adhiba.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faEnvelope, faBlog } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Layoutadhiba() {
    return (
        <>
            <ul class=" nav tabnavhead ">
                <li class="nav-item">
                    <a class="nav-link  tabhead1" aria-current="page" ><FontAwesomeIcon icon={faMobile} className="me-3 text-white " />+91-8189977700</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link tabhead1" ><FontAwesomeIcon icon={faEnvelope} className="me-3 text-white" />info@adhiba.com</a>
                </li>
                <li class="nav-item tabhead1 social-icontab  ">
                    <a href="https://wa.me/+918189977700" target="_blank"> <FontAwesomeIcon icon={faBlog} className="me-4  text-white" /></a>
                    <a href="https://wa.me/+918189977700" target="_blank"><FontAwesomeIcon icon={faWhatsapp} className="me-4 text-white" /></a>
                    <a href="https://wa.me/+918189977700" target="_blank"> <FontAwesomeIcon icon={faFacebook} className="me-4 text-white " /></a>
                    <a href="https://wa.me/+918189977700" target="_blank"><FontAwesomeIcon icon={faInstagram} className="me-4 text-white" /></a>
                    <a href="https://wa.me/+918189977700" target="_blank"><FontAwesomeIcon icon={faXTwitter} className="me-4 text-white" /></a>
                    <a href="https://wa.me/+918189977700" target="_blank"><FontAwesomeIcon icon={faTwitter} className="me-4 text-white" /></a>
                    <a href="https://wa.me/+918189977700" target="_blank"><FontAwesomeIcon icon={faYoutube} className="me-4 text-white" /></a>
                    <a href="https://wa.me/+918189977700" target="_blank"><FontAwesomeIcon icon={faEnvelope} className="    text-white" /></a>
                </li>
            </ul>

            <nav class="navbar navbarf  navbar-expand-lg  sticky-top " id="navbar">
                <div class="container primary-navigation">
                    <a class="navbar-brand" > <img className="adhibalogohead " src={adhibalogo} /> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class=" collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto  mb-lg-0">
                            <li class="nav-item navheadt">
                                <a class="nav-link  navheadt" aria-current="page"  >
                                    KNOW US
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link  navheadt dropbtn" id="navbarDropdown" role="button" aria-expanded="false">
                                    OUR BUSINESS
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link navheadt"  href="http://nystai.com/" target="-blank"> PRODUCT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link navheadt" href="http://nystai.com/" target="-blank" >SOLUTION</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link navheadt" > <Link className="text-dark" to="/adhiba-support"> SUPPORT</Link></a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
}