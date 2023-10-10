import React, { useEffect } from 'react';
import $ from 'jquery';
import Swiper from 'swiper';

import 'swiper/swiper-bundle.css';

const CustomFunctions = ({ hamburgerSelector, headerSelector, bodySelector, scrollToTopSelector, scrollDownSelector, swiperSelector }) => {
  useEffect(() => {
    const hamburger = $(hamburgerSelector);
    const header = $(headerSelector);
    const body = $(bodySelector);

    hamburger.on('click', function () {
      header.toggleClass('active');
      body.toggleClass('disable-scroll');
    });

    $(window).resize(function () {
      const windowWidth = $(this).width();

      if (windowWidth > 991) {
        header.removeClass('active');
        body.removeClass('disable-scroll');
      }
    });

    const scrollToTop = $(scrollToTopSelector);

    scrollToTop.on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, 1000);
      return false;
    });

    new Swiper(swiperSelector, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoHeight: true,
      observer: true,
      observeParents: true,
      centeredSlides: true,
      breakpoints: {
        320: {
          slidesPerView: 2.3,
        },
        600: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
          centeredSlides: true,
        },
      },
    });

    $(scrollDownSelector).on('click', function (e) {
      e.preventDefault();

      let target = $($(this).attr('href'));

      if (target.length) {
        let scrollTo = target.offset().top;

        $('body, html').animate(
          {
            scrollTop: scrollTo + 'px',
          },
          800
        );
      }
    });
  }, []);

  return <div></div>;
};

export default CustomFunctions;
