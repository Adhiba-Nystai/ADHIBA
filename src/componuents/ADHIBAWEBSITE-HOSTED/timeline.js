import React from "react";
import './imag.css'
import ptzcam1 from '../ADHIBAWEBSITE-HOSTED/font/cam.jpg.jpg'
import ptzcam2 from '../ADHIBAWEBSITE-HOSTED/font/4983.jpg'
import ptzcam3 from '../ADHIBAWEBSITE-HOSTED/font/SMARTPRO.jpg'
import ptzcam4 from '../ADHIBAWEBSITE-HOSTED/font/solimg.jpg'
import $ from 'jquery'
import jQuery from "jquery";
import { useEffect } from 'react';





export default function Tabs2() {
  useEffect(() => {
    (function ($) {
      $.fn.timeline = function () {
        var selectors = {
          id: $(this),
          item: $(this).find(".timeline-item"),
          activeClass: "timeline-item--active",
          img: ".timeline__img"
        };

        var centerItem = function () {
          var windowHeight = $(window).height();
          var scrollPos = $(window).scrollTop();

          selectors.item.each(function () {
            var topOffset = $(this).offset().top;
            var bottomOffset = topOffset + $(this).outerHeight();

            if (topOffset < scrollPos + windowHeight / 2 && bottomOffset > scrollPos + windowHeight / 2) {
              $(this).addClass(selectors.activeClass);
              // Update background image
              selectors.id.css(
                "background-image",
                "url(" + $(this).find(selectors.img).attr("src") + ")"
              );
            } else {
              $(this).removeClass(selectors.activeClass);
            }
          });
        };

        $(window).on('scroll', centerItem);
        $(window).on('resize', centerItem);
        centerItem(); // Center the initial active item

        return this; // Maintain chainability
      };
    })(jQuery);

    $("#timeline-1").timeline();
  }, []);
  return (
    <>



      <div class="timeline-container" id="timeline-1">
        <div class="timeline-header">
          <h2 class="timeline-header__title">JOURNEY OF US!</h2>

        </div>
        <div class="timeline">
          <div class="timeline-item" data-text="FATHER OF THE TURKS">
            <div class="timeline__content"><img class="timeline__img" src={ptzcam1} />
              <h2 class="timeline__content-title">2014</h2>
              <p class="timeline__content-desc">He was born in 1881 (probably in the spring) in Salonica, then an Ottoman city, now inGreece. His father Ali Riza, a customs official turned lumber merchant, died when Mustafawas still a boy. His mother Zubeyde, adevout and strong-willed woman, raised him and his sister.</p>
            </div>
          </div>
          <div class="timeline-item" data-text="FATHER OF THE TURKS">
            <div class="timeline__content"><img class="timeline__img"src={ptzcam2} />
              <h2 class="timeline__content-title">2018</h2>
              <p class="timeline__content-desc">First enrolled in a traditionalreligious school, he soon switched to a modern school. In 1893, he entered a military highschool where his mathematics teacher gave him the second name Kemal (meaning perfection)in recognition of young Mustafa's superior achievement.</p>
            </div>
          </div>

          <div class="timeline-item" data-text="FATHER OF THE TURKS">
            <div class="timeline__content"><img class="timeline__img" src={ptzcam3} />
              <h2 class="timeline__content-title">2020</h2>
              <p class="timeline__content-desc">In 1908 he helped the group of officers who toppled the Sultan. Mustafa Kemal'scareer flourished as he won his heroism in the far corners of the Ottoman Empire,including Albania and Tripoli. He also briefly served as a staff officer in Salonica andIstanbul and as a military attache in Sofia.</p>
            </div>
          </div>
          <div class="timeline-item" data-text="FATHER OF THE TURKS">
            <div class="timeline__content"><img class="timeline__img" src={ptzcam4} />
              <h2 class="timeline__content-title">2021</h2>
              <p class="timeline__content-desc">In 1915, when Dardanelles campaign was launched, Colonel Mustafa Kemal became anational hero by winning successive victories and finally repelling the invaders.</p>
            </div>
          </div>
          <div class="timeline-item" data-text="FATHER OF THE TURKS">
            <div class="timeline__content"><img class="timeline__img" src={ptzcam1} />
              <h2 class="timeline__content-title">2022</h2>
              <p class="timeline__content-desc">In 1908 he helped the group of officers who toppled the Sultan. Mustafa Kemal'scareer flourished as he won his heroism in the far corners of the Ottoman Empire,including Albania and Tripoli. He also briefly served as a staff officer in Salonica andIstanbul and as a military attache in Sofia.</p>
            </div>
          </div>

        </div>


      </div>
    </>
  )
}