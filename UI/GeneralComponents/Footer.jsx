"use client"; /* componente del lado del cliente */
import './Footer.scss';
import Button from '../Buttons/Button';
import Calendario from './Calendario';

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
        <div className="footer-box-navegation-logo"> </div>
        <div className="footer-box-navegation-information"> </div>
        <div className="footer-box-navegation-services"> </div>
        <div className="footer-box-navegation-cta"> </div>
     </div>
    <div className="footer-box-cta">
        <div className="footer-box-cta-text"> </div>
        <div className="footer-box-cta-phone"> </div>
     </div>
    </div>
  )
}
export default Footer;
