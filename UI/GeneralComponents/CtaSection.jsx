import Button from "../Buttons/ButtonCTA";
import ButtonCTA from "../Buttons/ButtonCTA";
import "./CtaSection.scss";
function CtaSection({ title, description, highlight }) {
  return (
    <div className="cta-section-container">
      <div className="section reveal-left">
        {" "}
        <h3>{title} <span className="highlight">{highlight}</span> </h3>
        <p>{description}</p>
        <div className="cta-section-button">
          <div className="button-container">
            <ButtonCTA href={"#contact"} extraClasses={"primary-button"}>
              Book a free visit today
            </ButtonCTA>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CtaSection;
