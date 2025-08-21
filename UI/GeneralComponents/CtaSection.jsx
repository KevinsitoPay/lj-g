import Button from "../Buttons/ButtonCTA";
import ButtonCTA from "../Buttons/ButtonCTA";
import "./CtaSection.scss";
function CtaSection({ title, description }) {

    return (
        <div className="cta-section-container">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="cta-section-button">
            <div className="button-container">
                <ButtonCTA extraClasses={"primary-button"}>Book a free visit today</ButtonCTA>
            </div>
            </div>
        </div>
    );
}

export default CtaSection;