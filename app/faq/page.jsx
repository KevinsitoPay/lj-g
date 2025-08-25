import FaqCard from "@/UI/GeneralComponents/FaqCard";
import Navbar from "@/UI/GeneralComponents/Navbar";
import ButtonCTA from "@/UI/Buttons/ButtonCTA";
import ButtonLink from "@/UI/Buttons/ButtonLink";
import "./FaqPage.scss";

export const metadata = {
  title: 'Faq',
  description: 'This page provides information about frequently asked questions',
  keywords: 'Faq, frequently asked questions, help',
};

function FaqPage() {
  return (
    <div>

      {/* hero section */}
         <div className="design-container"> 
          <div className="hero-content">
          <h1>Tittle where we adress the <span className="highlight"> main pain point</span></h1>
          <p>Description where we adress how we can resolve the main pain point main pain point that the client might have. Proving our value and being apart of our competitors.</p>
          <div className="button-container">
           <ButtonCTA extraClasses={"primary-button"}>  Book a free visit today </ButtonCTA>
           <ButtonLink>Check our projects</ButtonLink>
          </div>

        </div>
        </div>

      {/* CTA section */}
      <div className="cta-section">
        <div className="cta-content-left">
          <h2>Lorem impsun in dolore <span className="highlight">pastrun getlufa</span></h2>
        </div>
        <div className="cta-content-right">
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.</p>
          <div className="button-container">
          <ButtonLink className="button-reverse">Check our projects</ButtonLink>
          </div>
        </div>
      </div>

      <FaqCard />


    </div>
  );
}

export default FaqPage;


