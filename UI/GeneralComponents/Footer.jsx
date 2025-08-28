"use client"; /* componente del lado del cliente */
import "./Footer.scss";
import Button from "../Buttons/ButtonCTA";
import Calendario from "./Calendario";
import Link from "next/link";
import ButtonLink from "../Buttons/ButtonLink";
import LJLogo from "./LJLogo";
import ButtonCTA from "../Buttons/ButtonCTA";

function Footer() {
  return (
    <div className="footer-container fade-reveal">
      <div className="section">
        <div className="footer-box-calendar">
          <div className="footer-col1">
            <img src="/images/house-footer.jpg" alt="House Footer" />
            <h2>
              {" "}
              See if & Gonzalez is the right{" "}
              <span className="highlight">fit for your proyect.</span>
            </h2>
            <p>
              {" "}
              Book your first visit today. Our consultation is totally free and
              our promise is that after our visit You will have a clearer plan
              for Your garden.
            </p>

            <div className="button-container">
              <ButtonLink extraClasses={"arrow-white"}>
                Book a free consultation
              </ButtonLink>
            </div>
          </div>
          <div className="footer-col2">
            {" "}
            <Calendario />{" "}
          </div>
        </div>

        <div className="footer-box-links">
          <div className="footer-box-col1">
            <LJLogo />
          </div>
          <div className="footer-box-col2">
            <h6> Information </h6>
            <ul>
              <li>
                <Link href="/how-it-works">How It Works</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/Contractors">Contractors</Link>
              </li>
            </ul>
          </div>
          <div className="footer-box-col2">
            <h6> Our services </h6>
            <ul>
              <li>
                <Link href="/land-leveling">Service Name</Link>
              </li>
              <li>
                <Link href="/land-leveling">Service Name</Link>
              </li>
              <li>
                <Link href="/land-leveling">Service Name</Link>
              </li>
              <li>
                <Link href="/land-leveling">Service Name</Link>
              </li>
              <li>
                <Link href="/land-leveling">Service Name</Link>
              </li>
              <li>
                <Link href="/land-leveling">Service Name</Link>
              </li>
            </ul>
          </div>
          <div className="footer-box-col2">
            <ButtonCTA extraClasses={"accent-button-lofi"}>
              {" "}
              Check our Google Reviews{" "}
            </ButtonCTA>
            <div>
              <p>
                {" "}
                +1 (999) 999-99-99 <br /> info@ljandgonzalez.com{" "}
              </p>
              <p>
                {" "}
                1901 Thornridge Cir. Shiloh, <br /> Hawaii 81063
              </p>
            </div>
          </div>
        </div>

        <div className="footer-box-cta">
          <div className="footer-section">
            <div className="footer-box-col1">
              <p className="heading-2">
                {" "}
                If you want to quote a new project or have a particular
                question...
              </p>
            </div>

            <div className="footer-box-col2">
              <p className="heading-6">
                Just send us your contact email and we will contact you.
              </p>
              <form className="form-input">
                <div className="input-wrapper">
                  <input type="text" placeholder="Your email / phone number" />
                  <span className="arrow">→</span>
                </div>
              </form>
            </div>
          </div>

          <div className="footer-section">
            <div className="footer-box-col1">
              <p>
                ©LJ&Gonzalez 2025 | Web Development by{" "}
                <a href="https://monettedev.com">Monette Dev</a>{" "}
              </p>
            </div>
            <div className="footer-box-col2 col-left">
              <Link href="/privay-policy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
