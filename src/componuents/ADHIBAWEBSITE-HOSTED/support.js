import React from "react";
import './support.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faMobile, faEnvelope, faBlog, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import salesicon from '../ADHIBAWEBSITE-HOSTED/font/Group 10.png'
import serviesicon from '../ADHIBAWEBSITE-HOSTED/font/Group 10 (1).png'
import partnericon from '../ADHIBAWEBSITE-HOSTED/font/Group 10 (2).png'
import whatsapp from '../ADHIBAWEBSITE-HOSTED/font/Subtract.png'
import CHATWITHUS from '../ADHIBAWEBSITE-HOSTED/font/pngwing.com.png'
import faqs from '../ADHIBAWEBSITE-HOSTED/font/faq.png'
import Footer from "./footer";
import Layoutadhiba from "./layoutadhiba";
import adhibalogo from '../ADHIBAWEBSITE-HOSTED/font/adhiba.png'


export default function Supportadhiba() {

    const handleClick = () => {
        if (window.$zoho && window.$zoho.salesiq) {
            window.$zoho.salesiq.floatwindow.visible('show');
        } else {
            console.error("Zoho SalesIQ script not loaded");
        }
    }

    const [showsales, setShowsales] = useState(false);
    const [showservices, setShowservices] = useState(false);
    const [showpartner, setShowpartner] = useState(false);

    return (
        <>

            <div className="container text-center mt-5 mb-2">
                <h1 style={{ fontWeight: 'bolder' }}>
                    We are still working
                    on stuff and will let
                    you know when our
                    website launches.
                </h1>
            </div>

            <section className="sec-body-support-nystai">
                <div className="container">
                    <div className="col-12">
                        <div className=" row">
                            <div className="col-lg-5 col-md-6 col-sm-12" style={{display:"flex",justifyContent:"space-between",flexDirection:"column"}}>
                                <div class="card support-sales-card-nystai mb-3">
                                    <div className="col-12">
                                        <div className=" row">
                                            <div className="col-lg-4 col-md-12 col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                                <img src={salesicon} class="card-img-top mb-1 mt-1" />
                                            </div>
                                            <div className="col-lg-8 col-md-12 col-sm-12">
                                                <div class="">
                                                    <h1 class="mt-3"> SALES INQUIRY</h1>
                                                    <ul class="list-group">

                                                        <li class="list-group-item">

                                                            <FontAwesomeIcon icon={faEnvelopeCircleCheck} style={{ color: "#1d736f", }} className="me-1 " />sales@adhiba.com</li>

                                                    </ul>

                                                    <p className="mt-3" onClick={() => setShowsales(true)} style={{ color: "#1b6763" }}>
                                                        Submit a sales form <FontAwesomeIcon icon={faAnglesRight} fade />
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="card support-sales-card-nystai mb-3">
                                    <div className="col-12">
                                        <div className=" row">
                                            <div className="col-lg-4 col-md-5 col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                                <img src={serviesicon} class="card-img-top mb-1 mt-1" />
                                            </div>
                                            <div className="col-lg-8 col-md-7 col-sm-12">
                                                <div class="">
                                                    <h1 class="mt-3"> SERVICES </h1>
                                                    <ul class="list-group">
                                                        <li class="list-group-item">
                                                            <FontAwesomeIcon icon={faEnvelopeCircleCheck} style={{ color: "#1d736f", }} className="me-1 " />service@adhiba.com</li>
                                                    </ul>
                                                    <p className="mt-3" onClick={() => setShowservices(true)} style={{ color: "#1b6763" }}>
                                                        Submit a service form <FontAwesomeIcon icon={faAnglesRight} fade />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card support-sales-card-nystai mb-3">
                                    <div className="col-12">
                                        <div className=" row">
                                            <div className="col-lg-4 col-md-7 col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                                <img src={partnericon} class="card-img-top mb-1 mt-1" />
                                            </div>
                                            <div className="col-lg-8 col-md-6 col-sm-12">
                                                <div class="">
                                                    <h1 class="mt-3">  PARTNERS</h1>
                                                    <ul class="list-group">
                                                        <li class="list-group-item">
                                                            <FontAwesomeIcon icon={faEnvelopeCircleCheck} style={{ color: "#1d736f", }} className="me-1 " />partner@adhiba.com</li>
                                                    </ul>
                                                    <p className="mt-3" onClick={() => setShowpartner(true)} style={{ color: "#1b6763" }}>
                                                        Submit a partner form   <FontAwesomeIcon icon={faAnglesRight} fade />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-7 col-md-6 col-sm-12 contact-right-support-nystai">
                                <div style={{ marginBottom: '50px' }}>
                                    <h1 style={{ fontWeight: 'bolder' }}>CONTACT US</h1>
                                    <h1 style={{ fontSize: '4em' }}> <FontAwesomeIcon icon={faMobile} shake style={{ color: "#1d736f", }} className="me-1 " />+91 81899 77700</h1>
                                </div>


                                <div className="col-12 " style={{ marginBottom: '50px' }}>
                                    <h6 className="text-nav-topics-nystai">CHAT WITH  US</h6>
                                    <div className=" row">
                                        <div className="col-lg-6 col-md-12 col-sm-12" style={{ borderRight: "1px solid #1b6763" }}>
                                            <a href="https://wa.me/+918189977700" target="_blank">
                                                <img src={whatsapp} className="whats-icon-support-nystai" style={{ height: '10vh', width: 'fit-content' }} />
                                            </a>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <img src={CHATWITHUS} className="whats-icon-support-nystai" style={{ height: '10vh', width: 'fit-content' }} onClick={() => handleClick()} />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '50px' }}>
                                    <h1 style={{ fontWeight: 'bolder' }}> REGISTERED OFFICE</h1>
                                    <div className="mb-5" >
                                        <p>
                                          <b>ADDRESS : </b>  #2/153, Padmalaya Nagar,<br />Narasimhanaickenpalayam, Coimbatore, Tamil Nadu , India-641031
                                        </p>
                                        {/* <a href="https://maps.app.goo.gl/5ePMzkx6tec4rNny9" target="_blank" style={{ textDecoration: "underline" }}>
                                            CLICK TO know
                                        </a> */}
                                    </div>
                                    <h1 style={{ fontWeight: 'bolder' }}> SALES OFFICE</h1>
                                    <div >
                                        <p>
                                        <b>ADDRESS : </b> #96, 5th Street Extension, <br />Doctor's Colony, Gandhipuram, Coimbatore, Tamil Nadu , India-641012
                                        </p>
                                        {/* <a href="https://maps.app.goo.gl/5ePMzkx6tec4rNny9" target="_blank" style={{ textDecoration: "underline" }}>
                                            CLICK TO know
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <Modal
                show={showsales}
                onHide={() => setShowsales(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >

                <Modal.Body close>
                    <section className="d-flex">


                        <div className="">
                            <h3 className="text-center h-header-ctoopcard-nystai"> Security Professionals - Let's accelerate <br /> your business.</h3>
                            <p className="text-center">Fill out the form below to learn how you can participate in this incredible <br />  opportunity.</p>

                            <div className="container sales-form-support-nystai">
                                <form action="/action_page.php">
                                    <label for="fname">First Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                                    <label for="lname">Web site</label>
                                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                                    <label for="lname">customer request</label>
                                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                                    <label for="subject">Subject</label>
                                    <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "100px" }}></textarea>
                                    <input type="submit" value="Submit" />
                                </form>
                            </div>
                        </div>
                    </section>
                </Modal.Body>

                <Modal.Footer>
                    <p className="btn btn-link" onClick={() => setShowsales(false)}>BACK TO KNOW MORE</p>
                </Modal.Footer>

            </Modal>

            <Modal
                show={showservices}
                onHide={() => setShowservices(false)}
                dialogClassName="modal-90w modal-9h"
                aria-labelledby="example-custom-modal-styling-title"
            >

                <Modal.Body close>
                    <section className="d-flex">
                        <div className="">
                            <h3 className="text-center h-header-ctoopcard-nystai"> Security Professionals - Let's accelerate <br /> your business.</h3>
                            <p className="text-center">Fill out the form below to learn how you can participate in this incredible <br />  opportunity.</p>
                            <div class="container sales-form-support-nystai">
                                <form action="/action_page.php">
                                    <label for="fname">First Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                                    <label for="lname">Last Name</label>
                                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                                    <label for="subject">Subject</label>
                                    <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "100px" }}></textarea>
                                    <input type="submit" value="Submit" />
                                </form>
                            </div>
                        </div>
                    </section>
                </Modal.Body>

                <Modal.Footer>
                    <p className="btn btn-link" onClick={() => setShowservices(false)}>BACK TO KNOW MORE</p>
                </Modal.Footer>

            </Modal>

            <Modal
                show={showpartner}
                onHide={() => setShowpartner(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Body close>
                    <section className="d-flex">
                        <div className="">
                            <h3 className="text-center h-header-ctoopcard-nystai"> Security Professionals - Let's accelerate <br /> your business.</h3>
                            <p className="text-center">Fill out the form below to learn how you can participate in this incredible <br />  opportunity.</p>
                            <div class="container sales-form-support-nystai">
                                <form action="/action_page.php">
                                    <label for="fname">First Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                                    <label for="lname">Last Name</label>
                                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                                    <label for="subject">Subject</label>
                                    <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "100px" }}></textarea>
                                    <input type="submit" value="Submit" />
                                </form>
                            </div>
                        </div>
                    </section>
                </Modal.Body>

                <Modal.Footer>
                    <p className="btn btn-link" onClick={() => setShowpartner(false)}>BACK TO KNOW MORE</p>
                </Modal.Footer>

            </Modal>

        </>
    )
}