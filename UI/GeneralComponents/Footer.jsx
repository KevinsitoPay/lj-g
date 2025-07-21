"use client"; /* componente del lado del cliente */
import './Footer.scss';
import Button from '../Buttons/Button';
import Calendario from './Calendario';
import Link from 'next/link';

function Footer() {

  return (
    <div className="footer-container"> 
    <div className="footer-box-calendar"> 
        <div className="footer-box-calendar-cta">
            <img src="/Images/house-footer.jpg" alt="House Footer" />
            <h2> See if & Gonzalez is the right <span className="highlight">fit for your proyect.</span></h2>
            <p> Book your first visit today. Our consultation is totally free and our promise is that after our visit You will have a clearer plan for Your garden.</p>
            <Button text="Adress pain point" size="medium" link="/" variant="filled" textColor="#28282A" backgroundColor="#FCFAF8" iconColor="#F1572D" />
         </div>
        <div className="footer-box-calendar-schedule"> <Calendario /> </div>
    </div>
    <div className="footer-box-navegation">
        <div className="footer-box-navegation-logo">
          <img src="/Images/logo.png" alt="Logo" />
         </div>
        <div className="footer-box-navegation-information">
          <h6> Information </h6>
          <ul>
            <li><Link href="/how-it-works">How It Works</Link></li>
            <li>FAQ</li>
            <li>Contractors</li>
            <li>Book a free consultation</li>
          </ul>
         </div>
        <div className="footer-box-navegation-services">
          <h6> Our services </h6>
          <ul>
            <li>Landscaping</li>
            <li>Maintenance</li>
            <li>Design</li>
            <li>Consulting</li>
          </ul>
         </div>
        <div className="footer-box-navegation-cta">
          <Button text="View our Google Reviews" size="medium" link="/" variant="filled" textColor="#28282A" backgroundColor="#FCFAF8" iconColor="#FFD131" />
          <div>
            <p> +1 (999) 999-99-99 <br /> +1 (999) 999-99-99 </p>
            <ul> 1901 Thornridge Cir. Shiloh, <br /> Hawaii 81063</ul>
          </div>
        </div>
     </div>
    <div className="footer-box-cta">
        <div className="footer-box-cta-text"> 
            <h2> If you want to quote a new project or have a particular question...</h2>
            <span>©LJ&Gonzalez 2025 | Web Development by Monette Developer</span>
        </div>
        <div className="footer-box-cta-phone">
          <h6>Just send us your contact email and we will contact you.</h6>
          <form className="form-input">
            <div className="input-wrapper">
             <input type="text" placeholder="Your email / phone number" />
               <span className="arrow">→</span>
            </div>
            </form>
         </div>
     </div>
    </div>
  )
}
export default Footer;
