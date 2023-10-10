"use client";
import CustomFunctions from '../app/nav/customfunctions'


const Header = () => {

  return (
    <header className="header js-header">
      <CustomFunctions
        hamburgerSelector=".js-hamburger"
        headerSelector=".js-header"
        bodySelector="body"
        scrollToTopSelector=".js-scroll-to-top"
        scrollDownSelector=".js-scroll-down"
        swiperSelector=".swiper"
      />
      <div className="container container--lg">
        <div className="header__menu">
          <div className="header__logo">
            <a href="https://lipton.micro-plattform.com/" aria-label="lipton promo home">
              <img
                src="./assets/img/_icn/lipton-logo.svg"
                alt="logo"
                aria-hidden="true"
              />
            </a>
          </div>
          <div className="header__nav">
            <nav>
              <ul>
                <li>
                  <a href="#">Aktion</a>
                </li>
                <li>
                  <a href="#">Kontakt</a>
                </li>
                <li>
                  <a href="#">Lipton Ice Tea</a>
                </li>
              </ul>
            </nav>
            <div className="header__socials_lipton">
              <a href="https://www.facebook.com/liptonphilippines/?brand_redir=200106643364694" target="_blank" aria-label="go to facebook page of lipton promo">
                <img
                  src="./assets/img/_icn/facebook.svg"
                  alt="facebook"
                  aria-hidden="true"
                />
              </a>
              <a href="https://www.instagram.com/lipton/" target="_blank" aria-label="go to instagram page of lipton promo">
                <img
                  src="./assets/img/_icn/instagram.svg"
                  alt="instagram"
                  aria-hidden="true"
                />
              </a>
              <a href="https://www.youtube.com/@liptoniceteadeutschland2973/featured" target="_blank" aria-label="go to youtube page of lipton promo">
                <img
                  src="./assets/img/_icn/youtube.svg"
                  alt="youtube"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
          <div className="header__hamburger js-hamburger" role="button">
            <span className="visually-hidden">Open Menu</span>
            <span></span>
          </div>
          <div className="header__deco">
            <img
              src="./assets/header-deco.svg"
              alt="decoration"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;