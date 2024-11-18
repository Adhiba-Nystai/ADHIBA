import React from "react";
import './styleintro.css'
import $ from 'jquery'
import jQuery from "jquery";
// image
import soluimg from '../ADHIBAWEBSITE-HOSTED/font/ptz.png'
import soluimg2 from '../ADHIBAWEBSITE-HOSTED/font/pic3.avif'
import soluimg3 from '../ADHIBAWEBSITE-HOSTED/font/pic4.avif'
import ptzcam from '../ADHIBAWEBSITE-HOSTED/font/ptz.png'
import iconsto from '../ADHIBAWEBSITE-HOSTED/font/menu_3754921.png'
import icontec from '../ADHIBAWEBSITE-HOSTED/font/innovation_7266451.png'
import iconblog from '../ADHIBAWEBSITE-HOSTED/font/form_6868790.png'
import iconsolu from '../ADHIBAWEBSITE-HOSTED/font/jigsaw_2140209.png'
import iconpro from '../ADHIBAWEBSITE-HOSTED/font/product-development_5998199.png'
import adhibalogo from '../ADHIBAWEBSITE-HOSTED/font/adhiba.png'
import div from '../ADHIBAWEBSITE-HOSTED/font/4983.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faEnvelope, faBlog } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

import Tabs from "./scroll";
import Footer from "./footer";

import Productcardcar from "./product";
import NysCaro from "./Ncaro (1)";
import Timeline from "./timeline.js";

export default function Finaladhiba() {

  (function ($) {
    "use strict";



    $(document).ready(function () {


      $('.slide-buttons li:nth-child(1)').on('mouseenter', function () {
        $('.slide-buttons li.active').removeClass('active');
        $('.hero-center-section.show').removeClass("show");
        $('.hero-center-section:nth-child(1)').addClass("show");
        $('.slide-buttons li:nth-child(1)').addClass('active');
      })
      $('.slide-buttons li:nth-child(2)').on('mouseenter', function () {
        $('.slide-buttons li.active').removeClass('active');
        $('.hero-center-section.show').removeClass("show");
        $('.hero-center-section:nth-child(2)').addClass("show");
        $('.slide-buttons li:nth-child(2)').addClass('active');
      })
      $('.slide-buttons li:nth-child(3)').on('mouseenter', function () {
        $('.slide-buttons li.active').removeClass('active');
        $('.hero-center-section.show').removeClass("show");
        $('.hero-center-section:nth-child(3)').addClass("show");
        $('.slide-buttons li:nth-child(3)').addClass('active');
      })
      $('.slide-buttons li:nth-child(4)').on('mouseenter', function () {
        $('.slide-buttons li.active').removeClass('active');
        $('.hero-center-section.show').removeClass("show");
        $('.hero-center-section:nth-child(4)').addClass("show");
        $('.slide-buttons li:nth-child(4)').addClass('active');
      })
      $('.slide-buttons li:nth-child(1)').trigger('mouseenter')

    });

  })(jQuery);

  // Optional, if you want to make the text running
  let percent = 70;
  let counter = 1;
  let intervalID = null;
  $(document).ready(() => {
    intervalID = setInterval(updateNumber, 100);
  });

  // Update the number
  function updateNumber() {
    let step = 5;
    if (counter + step >= percent) {
      counter = percent;
      $('#percentage').html(counter + 'k');
      clearInterval(intervalID);
      return;
    }
    counter += step;
    $('#percentage',).html(counter + 'k');
  }

  // Optional, if you want to make the text running
  let percent2 = 15;
  let counter2 = 2;
  let intervalID2 = null;
  $(document).ready(() => {
    intervalID2 = setInterval(updateNumber2, 100);
  });

  // Update the number
  function updateNumber2() {
    let step2 = 1;
    if (counter2 + step2 >= percent2) {
      counter2 = percent2;
      $('#percentage2').html(counter2 + 'yrs+');
      clearInterval(intervalID2);
      return;
    }
    counter2 += step2;
    $('#percentage2',).html(counter2 + 'yrs+');
  }


  let percent3 = 90;
  let counter3 = 1;
  let intervalID3 = null;
  $(document).ready(() => {
    intervalID3 = setInterval(updateNumber3, 100);
  });

  // Update the number
  function updateNumber3() {
    let step3 = 5;
    if (counter3 + step3 >= percent3) {
      counter3 = percent3;
      $('#percentage3').html(counter3 + 'k');
      clearInterval(intervalID3);
      return;
    }
    counter3 += step3;
    $('#percentage3',).html(counter3 + 'k');
  }

  return (
    <>

      <section className="secintromain" id="home">



        <section className="bgimg" >
          <div className=" knownusheadv">

          </div>


        </section>


        <div class="card-group icongroup">
          <div class="card card1 card1 iconimgtext">
            <img class="service-image" src={iconsto} alt="brickwall" />
            <div class="">
              <h5 class="-title text-center">SUCCESS STORIES</h5>

            </div>

          </div>
          <div class="card  card1 card1 iconimgtext">
            <img class="service-image" src={icontec} alt="brickwall" />
            <div class="">
              <h5 class="-title text-center">TECHNOLOGIES</h5>

            </div>

          </div>
          <div class="card card1  card1 iconimgtext">
            <img class="service-image" src={iconpro} alt="brickwall" />
            <div class="">
              <h5 class="-title text-center">PRODUCT</h5>

            </div>

          </div>
          <div class="card card1 card1 iconimgtext">
            <img class="service-image" src={iconsolu} alt="brickwall" />
            <div class="">
              <h5 class="-title text-center">SOLUTION</h5>

            </div>

          </div>
          <div class="card card1 card1 iconimgtext">
            <img class="service-image" src={iconblog} alt="brickwall" />
            <div class="">
              <h5 class="-title text-center">BLOGS</h5>

            </div>

          </div>
        </div>






      </section>

      <section className="secintromain" id="blog">

        <Timeline />

        <section className='bgfpc'>
          <div id="orange-sectionmain3">
            <h1 id="orange-section-title">LET'S MAKE SOMETHING GREAT TOGETHER</h1>
            <p id="orange-section-desc">Get in touch with us and send some basic info for a quick quote.</p>
            <a href="./" id="orange-section-get-quotes" class="learn-more">GET FREE QUOTE</a>
          </div>
        </section>
        <Tabs />
        <section className='bgfpc'>
          <div id="orange-sectionmain2">
            <h1 id="orange-section-title">LET'S MAKE SOMETHING GREAT TOGETHER</h1>
            <p id="orange-section-desc">Get in touch with us and send some basic info for a quick quote.</p>
            <a href="./" id="orange-section-get-quotes" class="learn-more">GET FREE QUOTE</a>
          </div>
        </section>

      </section>

      <section className="secintromainsolution" id="ourbus">
        <h3 className=" text-center mt-5">LET'S MAKE SOMETHING GREAT TOGETHER</h3>
        <div class="card-group ">
          <div class="card card1 iconimgtext">
            <img class="service-image" src="https://nuuk-e3eaa.firebaseapp.com/assets/img/brickwall.svg" alt="brickwall" />
            <div class="">
              <p class="service-title">PRODUCT</p>
              <p class="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              <button className="disbtn1">
                <a class="arrow-btn" >DISCOVER MORE</a>
              </button>
            </div>

          </div>
          <div class="card card1 iconimgtext">
            <img class="service-image" src="https://nuuk-e3eaa.firebaseapp.com/assets/img/set-square.svg" alt="architecture" />
            <div class="">
              <p class="service-title"> PROCUREMENT </p>
              <p class="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              <button className="disbtn1">
                <a class="arrow-btn" >DISCOVER MORE</a>
              </button>

            </div>

          </div>
          <div class="card card1 iconimgtext">
            <img class="service-image" src="https://nuuk-e3eaa.firebaseapp.com/assets/img/toolbox.svg" alt="construction" />
            <div class="">
              <p class="service-title">DESIGN</p>
              <p class="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              <button className="disbtn1">
                <a class="arrow-btn" >DISCOVER MORE</a>
              </button>
            </div>

          </div>
          <div class="card card1 iconimgtext">
            <img class="service-image" src="https://nuuk-e3eaa.firebaseapp.com/assets/img/paint-roller.svg" alt="financial results" />
            <div class="">
              <p class="service-title">MANUFACUTURING</p>
              <p class="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              <button className="disbtn1">
                <a class="arrow-btn" >DISCOVER MORE</a>
              </button>
            </div>

          </div>
          <div class="card card1 iconimgtext">
            <img class="service-image" src="https://nuuk-e3eaa.firebaseapp.com/assets/img/paint-roller.svg" alt="financial results" />
            <div class="">
              <p class="service-title">TURN KEY</p>
              <p class="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              <button className="disbtn1">
                <a class="arrow-btn" >DISCOVER MORE</a>
              </button>

            </div>

          </div>
        </div>






      </section>

      <section className="secintromain" id="photos">
        <section className='bgfpc'>
          <div id="orange-sectionmain">
            <h5 id="orange-section-title">LET'S MAKE SOMETHING GREAT TOGETHER</h5>
            <p id="orange-section-desc">Get in touch with us and send some basic info for a quick quote.</p>
            <a href="./" id="orange-section-get-quotes" class="learn-more">GET FREE QUOTE</a>
          </div>
        </section>

        <Productcardcar />

      </section>

      <section className="container solusecmain" id="newsletter">

        <h1 className=" soltexth text-center ">All-around solutions for
          varied needs</h1>

        <div class="card-group">
          <div class="card ">
            <img src={soluimg} class="img-fluid h-50 " />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button className="disbtn1">
                <a class="arrow-btn" >DISCOVER MORE</a>
              </button>
            </div>
          </div>
          <div class="card">
            <img src={soluimg2} class="img-fluid h-50" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This card has supporting text below as a natural lead-in to additional content.This card has supporting text below as a natural lead-in to additional content.</p>
              <button className="disbtn1">
                <a class="arrow-btn" >DISCOVER MORE</a>
              </button>
            </div>
          </div>
          <div class="card">
            <img src={soluimg3} class="img-fluid h-50" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.content than the first to show that equal height action.</p>
              <button className="disbtn1">
                <a class="arrow-btn" >DISCOVER MORE</a>
              </button>
            </div>
          </div>
        </div>

      </section>

      <section className="" id="contact">

        <NysCaro />

        <div class="card-group icongroup">
          <div class="card card1 iconimgtext">

            <div class="text-center">

              <h1 className="" id='percentage'>0k</h1>
              <h6 className="" >PROJECTS COUNT</h6>

            </div>

          </div>
          <div class="card card1 iconimgtext">

            <div class="text-center">
              <h1 className="" id='percentage2'>0%</h1>
              <h6 className="" >YEARS IN FEILD</h6>
            </div>

          </div>
          <div class="card card1 iconimgtext">

            <div class="text-center">
              <h1 className="" id='percentage3'>0% </h1>
              <h6 className="" >DEVICE COUNT</h6>
            </div>

          </div>


        </div>

        <Footer />
      </section>

    </>
  )
}