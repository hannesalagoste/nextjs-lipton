"use client"
import Image from 'next/image'
import Form from "../components/Form"


export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero__img">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="./assets/lipton-hero-img.avif"
              type="image/avif"
            ></source>
            <source
              media="(max-width: 767px)"
              srcSet="./assets/lipton-hero-img.webp"
              type="image/webp"
            ></source>
            <source
              media="(max-width: 767px)"
              srcSet="./assets/lipton-hero-img.jpg"
              type="image/jpg"
            ></source>

            <source
              srcSet="./assets/lipton_promo_header_desktop.avif"
              type="image/avif"
            ></source>
            <source
              srcSet="./assets/lipton_promo_header_desktop.webp"
              type="image/webp"
            ></source>
            <img
              src="./assets/lipton_promo_header_desktop.jpg"
              alt=""
            ></img>
          </picture>
        </div>
        <div className="container container--lg">
          <div className="hero__merch">
            <h2>Gewinn jetzt mit Lipton coole Fanartikel!</h2>
            <a
              href="#lipton-promo-form"
              className="hero__merch-scroll-down js-scroll-down"
            >
              <svg
                width="22"
                height="25"
                viewBox="0 0 22 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"

                  d="M10.9997 5.05629L17.2419 0L21.7007 3.61173L15.4585 8.66802L15.4588 8.66827L11 12.28L10.9997 12.2798L10.9995 12.2799L6.5407 8.66816L6.54087 8.66802L0.298828 3.61184L4.75765 0.000110453L10.9997 5.05629ZM10.9997 17.364L17.2419 12.3077L21.7007 15.9194L15.4585 20.9757L15.4588 20.976L11 24.5877L10.9997 24.5874L10.9995 24.5876L6.5407 20.9759L6.54087 20.9757L0.298828 15.9195L4.75765 12.3078L10.9997 17.364Z"
                  fill="#233976" />
              </svg>
            </a>
            <img
              className="hero__merch-deco hero__merch-deco--decos"
              src="./assets/hero-decos.png"
              alt=""
              aria-hidden="true"
            ></img>
            <img
              className="hero__merch-deco hero__merch-deco--hoodie"
              src="./assets/lipton-hoodie.png"
              alt=""
              aria-hidden="true"
            ></img>
            <img
              className="hero__merch-deco hero__merch-deco--water-drop"
              src="./assets/lipton-water-drop-v2.png"
              alt=""
              aria-hidden="true"
            ></img>
            <img
              className="hero__merch-deco hero__merch-deco--droplets"
              src="./assets/droplets.png"
              alt=""
              aria-hidden="true"
            ></img>
            <img
              className="hero__merch-deco hero__merch-deco--yellow-circle"
              src="./assets/yellow-circle.png"
              alt=""
              aria-hidden="true"
            ></img>
          </div>
        </div>
        <div className="hero__cloud hero__cloud--left">
          <img src="./assets/cloud1.png" alt="" aria-hidden="true"></img>
        </div>
        <div className="hero__cloud hero__cloud--right">
          <img src="./assets/cloud2.png" alt="" aria-hidden="true"></img>
        </div>
      </section>

      {/* STEPS SECTION */}
      <section className="steps">
        <div className="container container--lg">
          <h2>So Geht’s</h2>
          <div className="steps__slider">
            <div className="swiper steps__slider-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="steps__slider-number">
                    <img
                      className="steps__slider-number-deco"
                      src="./assets/steps-deco-1.png"
                      alt=""
                      aria-hidden="true" />
                    <span>1</span>
                    <img
                      className="steps__slider-number-deco"
                      src="./assets/steps-deco-2.png"
                      alt=""
                      aria-hidden="true" />
                  </div>
                  <div className="steps__slider-text">
                    <p>Lipton Produkt nach Wahl kaufen</p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="steps__slider-number">
                    <img
                      className="steps__slider-number-deco"
                      src="./assets/steps-deco-3.png"
                      alt=""
                      aria-hidden="true" />
                    <span>2</span>
                    <img
                      className="steps__slider-number-deco"
                      src="./assets/steps-deco-4.png"
                      alt=""
                      aria-hidden="true" />
                  </div>
                  <div className="steps__slider-text">
                    <p>Kassenbon hochladen</p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="steps__slider-number">
                    <img
                      className="steps__slider-number-deco"
                      src="./assets/steps-deco-5.png"
                      alt=""
                      aria-hidden="true" />
                    <span>3</span>
                    <img
                      className="steps__slider-number-deco"
                      src="./assets/steps-deco-6.png"
                      alt=""
                      aria-hidden="true" />
                  </div>
                  <div className="steps__slider-text">
                    <p>
                      1 von 1000 Fanartikel-Pakete gewinnen (nur solange
                      der Vorrat reicht)
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="steps__slider-number">
                    <img
                      className="steps__slider-number-deco"
                      src="./assets/steps-deco-7.png"
                      alt=""
                      aria-hidden="true" />
                    <span>4</span>
                    <img
                      className="steps__slider-number-deco"
                      src="./assets/steps-deco-8.png"
                      alt=""
                      aria-hidden="true" />
                  </div>
                  <div className="steps__slider-text">
                    <p>Poste dein Gewinnglück unter #liptonXtwenty4tim</p>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
          <div className="steps__inner">
            <div className="steps__step">
              <div className="steps__step-number">
                <img
                  className="steps__step-number-deco"
                  src="./assets/steps-deco-1.png"
                  alt=""
                  aria-hidden="true" />
                <span>1</span>
                <img
                  className="steps__step-number-deco"
                  src="./assets/steps-deco-2.png"
                  alt=""
                  aria-hidden="true" />
              </div>
              <div className="steps__step-text">
                <p>Lipton Produkt nach Wahl kaufen</p>
              </div>
            </div>
            <div className="steps__step">
              <div className="steps__step-number">
                <img
                  className="steps__step-number-deco"
                  src="./assets/steps-deco-3.png"
                  alt=""
                  aria-hidden="true" />
                <span>2</span>
                <img
                  className="steps__step-number-deco"
                  src="./assets/steps-deco-4.png"
                  alt=""
                  aria-hidden="true" />
              </div>
              <div className="steps__step-text">
                <p>Kassenbon hochladen</p>
              </div>
            </div>
            <div className="steps__step">
              <div className="steps__step-number">
                <img
                  className="steps__step-number-deco"
                  src="./assets/steps-deco-5.png"
                  alt=""
                  aria-hidden="true" />
                <span>3</span>
                <img
                  className="steps__step-number-deco"
                  src="./assets/steps-deco-6.png"
                  alt=""
                  aria-hidden="true" />
              </div>
              <div className="steps__step-text">
                <p>
                  1 von 1000 Fanartikel-Pakete gewinnen (nur solange der
                  Vorrat reicht)
                </p>
              </div>
            </div>
            <div className="steps__step">
              <div className="steps__step-number">
                <img
                  className="steps__step-number-deco"
                  src="./assets/steps-deco-7.png"
                  alt=""
                  aria-hidden="true" />
                <span>4</span>
                <img
                  className="steps__step-number-deco"
                  src="./assets/steps-deco-8.png"
                  alt=""
                  aria-hidden="true" />
              </div>
              <div className="steps__step-text">
                <p>Poste dein Gewinnglück unter #liptonXtwenty4tim</p>
              </div>
            </div>
          </div>
        </div>
      </section>

       <Form/>             
      
      <section className="introduction">
        <div className="container container--lg">
          <div className="introduction__inner">
            <span>Influencer</span>
            <h3 className="no-text-shadow">Twenty4tim</h3>
            <div className="introduction__text">
              <p>
                Social Media ist sein Fachgebiet! Twenty4Tim begeistert
                täglich über 2,4 Mio Follower auf Instagram und 4,3 Mio
                Follower auf TikTok mit seinem authentischen und
                unterhaltsamen Content. Mittlerweile ist der Influencer
                und Entertainer auch im Musik Business erfolgreich.
                Passend dazu hat Lipton eine Kampagne unter dem Motto
                „Selbstverwirklichung“ ins Leben gerufen. In Kooperation
                mit Twenty4Tim und dem Künstler Alieu haben die beiden 3
                limitierte Dosen Designs gestaltet und Motive für die
                Geschmacksrichtungen Lipton sparkling Zitrone Zero,
                sparkling Zitrone und sparkling Pfirsich entworfen, die ab
                sofort erhältlich sind.
              </p>
            </div>
            <img
              src="./assets/introduction_person1.png"
              alt=""
              className="introduction__person"
              aria-hidden="true" />
            <img
              src="./assets/introduction-deco-leaf.png"
              alt=""
              className="introduction__deco-leaf"
              aria-hidden="true" />
            <img
              src="./assets/introduction-peach.png"
              alt=""
              className="introduction__deco-peach" />
          </div>
        </div>
      </section>

      <section className="introduction introduction--reverse">
        <div className="container container--lg">
          <div className="introduction__inner">
            <span>Designer</span>
            <h3 className="no-text-shadow">Alieu</h3>
            <div className="introduction__text">
              <p>
                Alieu ist schon seit Kindesalter für Kunst und Designs zu
                begeistern und machte sich in kurzer Zeit einen Namen als
                „der Künstler der Fußballstars“. Mittlerweile ist er Team
                Captain der Mannschaft Delay Sports und verfolgt weiterhin
                seine beiden Leidenschaften. Passend zum Motto
                „Selbstverwirklichung“ verfolgt Alieu seine Träume und hat
                sich seine künstlerischen Fähigkeiten mit viel Fleiß und
                Leidenschaft selbst beigebracht. Sein Stil zeichnet sich
                durch eine Kombination von naturalistischer und
                zeitgenössischer Kunst aus. Über seine Social Media Kanäle
                möchte Alieu Kunst im Allgemeinen für alle zugänglich
                machen. Schaut gerne mal bei @alieusawaneh auf Instagram
                und TikTok vorbei um mehr von dem Künstler zu entdecken.
              </p>
            </div>
            <div className="introduction__socials">
              <a href="https://www.instagram.com/twenty4tim/" target="_blank" aria-label="go to instagram">
                <img
                  src="./assets/img/_icn/instagram--blue.svg"
                  alt=""
                  aria-hidden="true" />
              </a>
              <a href="https://www.tiktok.com/@twenty4tim?lang=en" target="_blank" aria-label="go to tiktok">
                <img
                  src="./assets/img/_icn/tiktok--blue.svg"
                  alt=""
                  aria-hidden="true" />
              </a>
            </div>
            <img
              src="./assets/introduction_person2.png"
              alt=""
              className="introduction__person"
              aria-hidden="true" />
            <img
              src="./assets/introduction-deco-cans.png"
              alt=""
              className="introduction__cans"
              aria-hidden="true" />
          </div>
        </div>
      </section>


    </>

  )
}
