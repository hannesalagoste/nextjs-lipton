const Footer = () => {
    return (
      <footer className="footer">
        <div className="top-deco">
          <img
            src="./assets/lipton-promo-deco-rand-1.png"
            alt=""
            aria-hidden="true"
          />
        </div>
        <div className="footer__social_lipton">
          <div className="container container--xs">
            <div className="footer__logo">
              <a href="/" aria-label="lipton promo home">
                <img
                  src="./assets/img/_icn/lipton-logo-with-shadow.svg"
                  
                  alt="logo"
                  aria-hidden="true"
                />
              </a>
            </div>
            <div className="footer__social_lipton-inner">
              <h5 className="no-text-shadow">Don’t you forget about us:</h5>
              <div>
                <a
                  href="https://www.facebook.com/Lipton/?brand_redir=454790357917963"
                  target="_blank"
                  aria-label="go to facebook page of lipton promo"
                >
                  <img
                    src="./assets/img/_icn/facebook.svg"
                    alt="facebook"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="https://www.instagram.com/lipton/"
                  target="_blank"
                  aria-label="go to instagram page of lipton promo"
                >
                  <img
                    src="./assets/img/_icn/instagram.svg"
                    alt="instagram"
                    aria-hidden="true"
                  />
                </a>
                <a href="https://www.youtube.com/@liptoniceteadeutschland2973/featured"
                  target="_blank"
                  aria-label="go to youtube page of lipton promo">
                  <img
                    src="./assets/img/_icn/youtube.svg"
                    alt="youtube"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
            <div className="scroll-to-top js-scroll-to-top">
              <a href="" aria-label="scroll to top">
                <img src="./assets/img/_icn/scroll-up.svg" alt="scroll up" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__links">
          <div className="container container--xs">
            <ul>
              <li>
                <a href="">Kontakt</a>
              </li>
              <li>
                <a href="">Impressum</a>
              </li>
              <li>
                <a href="">Teilnahmebedingungen</a>
              </li>
              <li>
                <a href="">Datenschutz</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__copyright">
          <div className="container container--xs">
            <p>&copy; 2023 Pepsico</p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer